import { IonContent, IonHeader, IonPage, IonTitle, IonTextarea, IonToolbar, IonItem, IonInput, IonLabel, IonButton, IonCol, IonGrid, IonRow  } from '@ionic/react';

const PucnhInVerify: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Verify Punch in</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton expand="block">Emp ID, Emp Name</IonButton>

        <IonItem>
            <IonButton  color="light" className="ion-text-wrap" size="large" style={{ margin: '40px' }}>
                Open Front facing camera
            </IonButton>
        </IonItem>


      </IonContent>
    </IonPage>
  );
};

export default PucnhInVerify;
