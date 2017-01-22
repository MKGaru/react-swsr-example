import * as React from 'react';
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'

import {App} from './pages/App'

async function parseRequestData(request:Request){
	let data = Object.fromQueryString( (request.url.match(/\?(.*)$/)||[,''])[1] );
	if(request.method=='POST'){
		const blob = await request.blob();
		const query = await (new Promise((res)=>{
			const fileReader = new FileReader();
			fileReader.addEventListener('loadend',(e:any)=>{
				const queryString = decodeURI( e.srcElement.result);
				res(Object.fromQueryString(queryString,{deep:true}));
			});
			fileReader.readAsText(blob);
		}));
		data = {...data,...query}
	}
	return data;
}

export namespace Router {
	export function fetch(event: FetchEvent) {
		const scope = location.pathname.match(/(.*)\/[^/]*$/)[1];
		const path = (event.request.url.match(/\/\/[^\/]*\/([^?]*)/)[1]||'').substr(scope.length);
		const request = event.request;
		const queryString = (request.url.match(/\?(.*)$/)||[,''])[1];

		if(!request.url.startsWith(location.origin+'/')) return;

		return event.respondWith(new Promise((resolve)=>{
			match({ routes:[
				{ path:'/app', component:App }
			], location: `${path||'app'}?${queryString}` }, async (error, redirectLocation, renderProps) => {
				let response:Response;
				if(error){
					response = new Response(error.message,{status:500,headers:{'Content-Type':'text/plain'}});
				}else if(redirectLocation){
					response = Response.redirect(redirectLocation.pathname + redirectLocation.search,302);
				}else if(renderProps){
					response = new Response('<!DOCTYPE html>'+renderToString(React.createElement(RouterContext, renderProps)),{headers:{'Content-Type':'text/html'}})
				}else{
					response = await self.fetch(request.clone())
				}
				resolve(response);
			})
		}));
	}
}
