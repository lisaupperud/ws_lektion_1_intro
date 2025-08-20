# Web Services & Relaterade Tekniker

## Web Services i Java
- **SOAP (JAX-WS)** – Single Object Access Protocol, inte RESTful.  
- **RESTful (JAX-RS)** – kan även implementera SOAP.  
- Oberoende av OS, språk och klient.  
- Följer **Client/Server-modellen** och är designade för interaktion mellan maskiner/appar.  
- Bör vara **interoperabla** (plattformsoberoende) och tillåta kommunikation över nätverk.  
- Skillnad mot API:er: API kan vara offline, medan Web Services alltid är online.  
- Protokoll fungerar som en **checklista** för kommunikation.  

### XML
- Plattform- och hårdvaruoberoende för att lagra/transportera data.  
- Självbeskrivande format.  

### Maven
- Hanterar bl.a. builds, beroenden och projektstruktur.  

## HTTP
- Protokoll för metoder och kommunikation på webben.  

## Node.js + TypeScript
Node.js möjliggör:  
- Terminalverktyg och skript.  
- Backend och serverstart.  
- API:er och webappar.  
- Förbättrat stöd för TypeScript.  
- Ett **JS runtime environment** med API:er för interaktion med operativsystemet.  

### package.json
- Startpunkt för projektet, likt `pom.xml` i Java.  
- Anger huvudfil (`main`) och scriptkommandon.  

### Miljövariabler
- Hanteras via `.env`-filer.  
- Används för känslig data som **nycklar och lösenord** som inte bör exponeras offentligt.  

---

## GDPR
- Viktigt att beakta vid utveckling av tjänster som hanterar personuppgifter.  
- Fokuserar på **integritet, säkerhet och transparens**.  
