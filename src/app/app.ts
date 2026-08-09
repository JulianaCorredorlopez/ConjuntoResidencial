import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Amenities } from './components/amenities/amenities';
import { Administration } from './components/administration/administration';
import { Announcements } from './components/announcements/announcements';
import { Gallery } from './components/gallery/gallery';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Amenities, Administration, Announcements, Gallery, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
