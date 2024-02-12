import { IonContent, IonHeader, IonTextarea, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonCol, IonGrid, IonRow  } from '@ionic/react';

import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Leave Section</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton expand="block">Emp ID, Emp Name</IonButton>
        <IonItem>
          <IonButton size="large" style={{ margin: '10px' }}>Date From</IonButton>
          <IonButton size="large" style={{ margin: '10px' }}>Shift</IonButton>
        </IonItem>
        <IonItem>
          <IonButton size="large" style={{ margin: '10px' }}>Date To</IonButton>
          <IonButton size="large" style={{ margin: '10px' }}>Shift</IonButton>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Description</IonLabel>
          <IonTextarea placeholder="Description here" autoGrow={true}></IonTextarea>
        </IonItem>

        <IonItem>
            <IonButton  color="tertiary" className="ion-text-wrap" size="large" style={{ margin: '80px' }}>
                Apply
            </IonButton>
        </IonItem>

        <IonGrid fixed={true}>
          <IonRow>
            <IonCol>S. No.</IonCol>
            <IonCol>Date From</IonCol>
            <IonCol>Date To</IonCol>
            <IonCol>Status</IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
