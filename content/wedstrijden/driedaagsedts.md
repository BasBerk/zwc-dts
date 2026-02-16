---
title: "Driedaagse DTS"
subtitle: "12, 13 en 14 juni 2026 | Wielerbaan DTS"
tagline: "Drie dagen, drie disciplines, één winnaar"
date: 2026-06-12
draft: false
description: "Uniek wielerweekend met tijdrit, afvalkoers en criterium - drie dagen wielerplezier bij DTS"
sidebar: true
sidebarlogo: logo
include_footer: true
---

# Event Configuration
event:
  registration_url: "https://inschrijven.dts-wielrennen.nl/driedaagse-2026"  # TBD - external registration
  registration_price: "€15,00"
  registration_price_per_day: "€5,00"
  location: "Wielerbaan DTS"
  round_length: "1.251 meter"

# Tijdrit Configuration (Friday)
tijdrit:
  start_time: "19:00 uur (alle klassen)"
  distance: "10 ronden (12,51 km)"
  direction: "tegen de klok in"
  start_interval: "60 seconden"
  bonus_points:
    snelste_ronde: "TBD punten"
    beste_voorspelling: "TBD punten"
    meest_consistent: "TBD punten"

# Afvalkoers Configuration (Saturday)
afvalkoers:
  start_times:
    klasse_3: "10:00 uur"
    klasse_1_2: "11:30 uur"
  duration:
    klasse_3: "60 minuten"
    klasse_1_2: "75 minuten"
  direction: "met de klok mee"
  afval_start: "40 minuten"
  afval_per_ronde: "TBD (2/3/4/5 renners)"

# Criterium Configuration (Sunday)
criterium:
  start_times:
    klasse_3: "10:00 uur"
    klasse_1_2: "11:30 uur"
  duration:
    klasse_3: "60 minuten + 5 rondes"
    klasse_1_2: "75 minuten + 5 rondes"
  direction: "met de klok mee"
  tussensprints:
    klasse_3: "20 en 40 minuten"
    klasse_1_2: "25 en 50 minuten"
  sprint_punten: "TBD (top 5)"
  leidersprijs: "TBD punten"

# Scoring System
points:
  # Standard point system for all events
  first: 60
  second: 58
  third: 56
  fourth: 54
  fifth: 52
  sixth: 50
  # 7th-16th: decreasing to 30
  other: 30
  lap_bonus: 25  # per lapped rider in afvalkoers

# General Event Rules
rules:
  tie_breaker: "TBD"
  categories: ["Klasse 1/2", "Klasse 3", "Dames"]
  mandatory_participation: "Alle drie wedstrijden moeten worden gestart"
  bike_requirements: "Normale racefiets verplicht"
---

# {{< param "title" >}}

<div class="hero-section has-text-centered mb-6">
  <p class="subtitle is-4 mb-2">{{< param "subtitle" >}}</p>
  <p class="is-size-5 has-text-weight-medium mb-4">{{< param "tagline" >}}</p>
  
  <div class="buttons is-centered">
    <a href="{{< param "event.registration_url" >}}" class="button is-primary is-large" target="_blank">
      <span class="icon">
        <i class="fas fa-user-plus"></i>
      </span>
      <span>Inschrijven - {{< param "event.registration_price" >}}</span>
    </a>
  </div>
  
  <p class="is-size-6 has-text-grey-dark">
    <strong>Categorieën:</strong> Klasse 1/2, Klasse 3, Dames
  </p>
</div>

---

## Over de Driedaagse

De Driedaagse DTS is een uniek wielerweekend georganiseerd door Zaanlandse Wielerclub DTS. Drie dagen lang strijden renners in verschillende disciplines om het eindklassement. Van de razendsnelle tijdrit op vrijdag, via de tactische afvalkoers op zaterdag, tot het spectaculaire criterium op zondag.

Elke dag biedt zijn eigen uitdaging en vraagt verschillende vaardigheden van de deelnemers. Het eindklassement wordt bepaald door de som van alle behaalde punten tijdens de drie wedstrijden.

---

## Programma

{{< event-day-card 
    day="Vrijdag 12 juni" 
    race="Tijdrit" 
    start_time="19:00 uur (alle klassen)"
    description="Start je weekend met een krachtige individuele tijdrit tegen de klok in."
    icon="clock"
>}}

{{< event-day-card 
    day="Zaterdag 13 juni" 
    race="Afvalkoers" 
    start_time="Klasse 3: 10:00 uur | Klasse 1/2: 11:30 uur"
    description="Tactiek en doorzettingsvermogen in een spannende afvalkoers met de klok mee."
    icon="users-slash"
>}}

{{< event-day-card 
    day="Zondag 14 juni" 
    race="Criterium" 
    start_time="Klasse 3: 10:00 uur | Klasse 1/2: 11:30 uur"
    description="Sluit het weekend af met een klassiek criterium inclusief tussensprints."
    icon="flag-checkered"
>}}

---

## Tijdrit - Vrijdag 12 juni

**Starttijd:** {{< param "tijdrit.start_time" >}}

### Wedstrijdverloop
- **Afstand:** {{< param "tijdrit.distance" >}}
- **Richting:** {{< param "tijdrit.direction" >}}
- **Start:** elke {{< param "tijdrit.start_interval" >}} (volgorde via website)

### Materiaal & Regels
- **Verplicht:** {{< param "rules.bike_requirements" >}}
- **Toegestaan:** Tijdrithelm en snelpak
- **Niet toegestaan:** Tijdritfiets, opzetstuur, dichte wielen
- **Afstand houden:** Minimaal 5 meter achter voorganger
- **Verboden:** Draften/slipstreamen

### Punten & Bonussen

{{< points-table race="tijdrit" >}}

**Bonuspunten:**
- Snelste ronde: {{< param "tijdrit.bonus_points.snelste_ronde" >}} (per klasse)
- Beste voorspelling rondetijd: {{< param "tijdrit.bonus_points.beste_voorspelling" >}}
- Meest consistente rijder: {{< param "tijdrit.bonus_points.meest_consistent" >}}

---

## Afvalkoers - Zaterdag 13 juni

**Starttijden:**
- Klasse 3: {{< param "afvalkoers.start_times.klasse_3" >}}
- Klasse 1/2: {{< param "afvalkoers.start_times.klasse_1_2" >}}

### Wedstrijdverloop
- **Duur:** Klasse 3: {{< param "afvalkoers.duration.klasse_3" >}} | Klasse 1/2: {{< param "afvalkoers.duration.klasse_1_2" >}}
- **Richting:** {{< param "afvalkoers.direction" >}}
- **Fiets:** {{< param "rules.bike_requirements" >}}

### Raceverloop

**Eerste {{< param "afvalkoers.afval_start" >}} minuten: Reguliere koers**
- Op ronde gezet worden: 0 punten en uit koers
- Iemand op ronde zetten: +{{< param "points.lap_bonus" >}} punten per gelapte renner

**Na {{< param "afvalkoers.afval_start" >}} minuten: Afvalrondes**
- Aantal afvallers per ronde: {{< param "afvalkoers.afval_per_ronde" >}}
- Laatste(n) over finish valt/vallen af
- Continue tot 5 renners over zijn

**Finale:** Laatste 5 renners sprinten 2 rondes voor einduitslag

### Punten Top 5
{{< points-table race="afvalkoers" >}}

---

## Criterium - Zondag 14 juni

**Starttijden:**
- Klasse 3: {{< param "criterium.start_times.klasse_3" >}}
- Klasse 1/2: {{< param "criterium.start_times.klasse_1_2" >}}

### Wedstrijdverloop
- **Duur:** Klasse 3: {{< param "criterium.duration.klasse_3" >}} | Klasse 1/2: {{< param "criterium.duration.klasse_1_2" >}}
- **Richting:** {{< param "criterium.direction" >}}
- **Fiets:** {{< param "rules.bike_requirements" >}}

### Tussensprints
- **Klasse 3:** op {{< param "criterium.tussensprints.klasse_3" >}}
- **Klasse 1/2:** op {{< param "criterium.tussensprints.klasse_1_2" >}}
- **Punten per sprint:** {{< param "criterium.sprint_punten" >}}

### Extra Punten
- **Leidersprijs:** {{< param "criterium.leidersprijs" >}} (renner die het vaakst als eerste over finish komt)
- **Eindklassement punten:** Volgens standaard puntensysteem

---

## Inschrijving

### Inschrijfkosten
- **Per wedstrijd:** {{< param "event.registration_price_per_day" >}}
- **Totaal:** {{< param "event.registration_price" >}}

### Inschrijfvoorwaarden
- Inschrijven kan **uitsluitend vooraf** via de website
- Bijschrijven is mogelijk tot de start van de tijdrit op vrijdagavond
- {{< param "rules.mandatory_participation" >}}
- Niet starten betekent uitsluiting voor de volgende wedstrijd
- Deelname op eigen risico
- KNWU-reglementen zijn van toepassing

<div class="has-text-centered mt-5">
  <a href="{{< param "event.registration_url" >}}" class="button is-primary is-large" target="_blank">
    <span class="icon">
      <i class="fas fa-external-link-alt"></i>
    </span>
    <span>Naar inschrijfformulier</span>
  </a>
</div>

---

## Klassementen en Prijzen

### Klassementen
- **Dagklassement** per wedstrijd
- **Eindklassement** per categorie (Klasse 1/2, Klasse 3, Dames)
- **Algemeen eindklassement**

Het eindklassement wordt bepaald door de **som van alle punten** behaald tijdens de drie wedstrijden.

### Prijsuitreiking
- **Dagprijzen:** top 3 per dag per klasse  
- **Eindklassement:** top 15 overall
- **Prijsuitreiking:** vrijdag op zaterdag (ivm berekeningen)

**Bij gelijke stand:** {{< param "rules.tie_breaker" >}}

---

## Praktische Informatie

### Parcours
- **Lengte per ronde:** {{< param "event.round_length" >}}
- **Locatie:** {{< param "event.location" >}}

### Categorieën
- Klasse 1/2
- Klasse 3
- Dames (mogen kiezen tussen klasse 2 of 3)

### Veiligheid
- ✅ EHBO aanwezig
- ✅ Jury aanwezig  
- ⚠️ Beslissingen wedstrijdleiding zijn bindend

### Contact
**Organisatie:** Zaanlandse Wielerclub DTS  
**Contact:** (gegevens volgen)
**Versie:** Concept - februari 2026

---

{{< newsimage src="/images/news/driedaagse-dts-2026/hero.jpg" alt="Driedaagse DTS wielerevent" caption="Drie dagen, drie disciplines, één winnaar - Driedaagse DTS 2026" >}}