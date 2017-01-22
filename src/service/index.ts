import * as Sugar from 'sugar';
import 'sugar/locales/ja';
import {Router} from './router';

Sugar.extend();
Date.setLocale('ja');

self.postMessage = (msg)=>{console.info(msg)};

self.addEventListener('fetch', Router.fetch);

self.addEventListener('install', function(event:InstallEvent) {
	// インストール完了後、ページリロードを待たずにservice workerをactivateする
	event.waitUntil(self.skipWaiting());
});
self.addEventListener('activate', function(event:ExtendableEvent) {
	event.waitUntil(self.clients.claim());
});

// ここで明示的にupdateしても、service.jsに割り当てられているmax-ageの期間はdisk cacheを参照してしまうらしい
self.registration.update();


