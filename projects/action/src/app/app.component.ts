import { Component, OnInit } from '@angular/core';
import { DebugService, Fixture } from '@commonshcs-angular'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  chcsdebug = new BehaviorSubject<DebugService|null>(null)
  
  constructor(
  ){}

  async ngOnInit() {
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    const response = await chrome.tabs.sendMessage(tab.id!, {greeting: "hello"})
    this.chcsdebug.next(response['chcsdebug'])
  }

  async loadFixture(fixture: Fixture) {
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    chrome.tabs.sendMessage(tab.id!, {fixture})
    window.close()
  }
}
