import { IonImg, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonInput, IonList, IonSelect, IonSelectOption  } from '@ionic/react';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

            <IonImg src="assets/images/logo.jpg" alt="LOGO" style={{ margin: '10px' }}></IonImg>

            <IonItem>
                <IonLabel >ID</IonLabel>
                <IonInput type="email"></IonInput>
            </IonItem>

            <IonItem>
                <IonLabel >Password</IonLabel>
                <IonInput type="password"></IonInput>
            </IonItem>

            <IonItem>
                <IonSelect placeholder="Select Language">
                <IonSelectOption value="english">English</IonSelectOption>
                <IonSelectOption value="hindi">Hindi</IonSelectOption>
                </IonSelect>
            </IonItem>
        
            <IonButton expand="block">Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
