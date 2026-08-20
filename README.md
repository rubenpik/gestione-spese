# Gestione Spese

PWA personale, ottimizzata per iPhone, per registrare entrate e uscite, controllare la disponibilità mensile e trasformare il risparmio extra in obiettivi concreti.

## Versione

**v2.1.8**

## Funzioni principali

- Home con disponibilità mensile e spesa giornaliera consigliata
- Disponibilità calcolata sul valore maggiore tra saldo iniziale ed entrate effettive del mese
- Movimenti e spese fisse nella stessa sezione, con passaggio diretto tra inserimento singolo e fisso
- Spese fisse senza scadenza o con durata di 3, 6, 12 o un numero personalizzato di mesi
- Entrate ricorrenti con categorie e descrizioni dedicate
- Fondo Obiettivi e riepilogo mensile congelati alla chiusura, senza ricalcoli retroattivi
- Disponibilità dei mesi conclusi verificata sulle entrate e sulle spese realmente registrate
- Ricostruzione automatica del Fondo Obiettivi quando un vecchio riepilogo mensile è incoerente
- Categorie essenziali per spese ed entrate
- Analisi mensili e di lungo periodo
- Obiettivi con priorità Alta, Media e Bassa
- Fondo Obiettivi alimentato soltanto dal risparmio extra
- Riduzione del Fondo nei mesi in cui viene superata la disponibilità spendibile
- Avanzamento automatico degli obiettivi
- Avanzamento di ogni obiettivo confrontato con l’intero Fondo disponibile
- Ultima voce dei movimenti sempre accessibile sopra il pulsante flottante
- Home semplificata, senza riepiloghi duplicati di categorie e obiettivi
- Navigazione inferiore con sezione attiva evidenziata
- Interruttore dedicato per il tema scuro nelle Impostazioni
- Ordine di compilazione uniforme tra movimenti singoli e fissi
- Storico mensile bloccato alla chiusura di ogni mese
- Backup e ripristino compatibili con i dati delle versioni precedenti
- Tema chiaro/scuro selezionabile dalle Impostazioni e installazione PWA

## Pubblicazione

Il contenuto della repository può essere caricato direttamente come progetto statico su Cloudflare.

Il file iniziale deve rimanere `index.html` nella cartella principale.

## Dati

I dati sono salvati localmente nel browser associato al dominio dell’app. Prima di ogni aggiornamento è consigliato esportare un backup da **Impostazioni → Esporta backup completo**.
