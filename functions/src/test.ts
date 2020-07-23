import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const db = admin.firestore();

export const helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase!");
});

export const makeUppercase = functions.firestore.document('/messages/{documentId}')
    .onCreate((snap, context) => {
      // Grab the current value of what was written to Cloud Firestore.
      const original = snap.data().original;

      // Access the parameter `{documentId}` with `context.params`
      console.log('Uppercasing', context.params.documentId, original);

      const uppercase = original.toUpperCase();

      // You must return a Promise when performing asynchronous tasks inside a Functions such as
      // writing to Cloud Firestore.
      // Setting an 'uppercase' field in Cloud Firestore document returns a Promise.
      return snap.ref.set({uppercase}, {merge: true});
    });

export const calcularAporteIess = functions.firestore
    .document('empleos/{empleoId}').onUpdate((change, context) => {

        const _new = change.after.data();
        const _old = change.before.data();

        if(_new.salario!==_old.salario){

            const empleoId = context.params.empleoId;
            const aporteIess = _new.salario * 0.0945;

            return db.collection('empleos').doc(empleoId).set({aporteIess}, {merge: true})
        }

        return null;
    });