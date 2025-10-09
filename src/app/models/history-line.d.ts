import {WebSite} from '@app/models/web-site';

export type HistoryLine = {
  id: number;
  search: string;
  date: string;
  webSites: WebSite[];
}
