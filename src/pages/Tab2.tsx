import { IonContent, IonHeader, IonPage, IonTitle, IonTextarea, IonToolbar, IonItem, IonInput, IonLabel, IonButton, IonCol, IonGrid, IonRow  } from '@ionic/react';

import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ticket</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton expand="block">Emp ID, Emp Name</IonButton>

        <IonItem>
          <IonLabel position="stacked">Reason for ticket</IonLabel>
          <IonInput type="text" placeholder="Reason for ticket Here"></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Description</IonLabel>
          <IonTextarea placeholder="Description here" autoGrow={true}></IonTextarea>
        </IonItem>

        <IonItem>
          <IonButton size="default" style={{ margin: '10px' }}>Select file</IonButton>
          <IonButton size="default" style={{ margin: '10px' }}>Upload</IonButton>
        </IonItem>

        <IonItem>
            <IonButton  color="light" className="ion-text-wrap" size="large" style={{ margin: '40px' }}>
                Apply
            </IonButton>
        </IonItem>

        <IonGrid fixed={true}>
          <IonRow>
            <IonCol>S. No.</IonCol>
            <IonCol>Reason</IonCol>
            <IonCol>Remark</IonCol>
            <IonCol>Status</IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
