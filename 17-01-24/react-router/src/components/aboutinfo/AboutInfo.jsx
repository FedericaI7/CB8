import styles from "./index.module.scss";

export default function AboutInfo() {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <div>
          <h3 className={styles.title}>Benvenuti nel Nostro Mondo</h3>
          <p className={styles.text}>
            Siamo [Nome dell'azienda], un team appassionato che crede nella
            qualità, nell'innovazione e nell'eccellenza. Fondati con la missione
            di offrire prodotti straordinari che soddisfano le esigenze e le
            aspettative dei nostri clienti, ci impegniamo a fornire
            un'esperienza di acquisto unica e memorabile.
          </p>
        </div>
        <div>
          <h3 className={styles.title}>La Nostra Storia</h3>
          <p className={styles.text}>
            Il nostro viaggio è iniziato con una visione: quella di creare un
            luogo in cui gli appassionati di [tipo di prodotto] potessero
            trovare esattamente ciò che cercavano, accompagnato da un servizio
            clienti eccezionale. Nel corso degli anni, abbiamo cresciuto e
            ampliato la nostra gamma di prodotti, collaborando con i migliori
            fornitori per garantire qualità e innovazione.
          </p>
        </div>
        <div>
          <h3 className={styles.title}>Cosa Ci Rende Unici</h3>
          <p className={styles.text}>
            Ciò che ci distingue è l'attenzione ai dettagli e l'amore per ciò
            che facciamo. Ogni prodotto nel nostro assortimento è stato
            selezionato con cura, riflettendo i nostri standard elevati. Ci
            impegniamo a offrire non solo prodotti, ma anche soluzioni che
            migliorino la vita quotidiana dei nostri clienti.
          </p>
        </div>
      </div>
    </div>
  );
}
