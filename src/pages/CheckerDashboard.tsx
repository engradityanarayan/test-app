import { IonImg, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonDatetime  } from '@ionic/react';

const CheckerDashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Checker Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonImg src="assets/images/header.jpg" alt="HEADER" style={{ margin: '10px' }}></IonImg>
        <IonButton expand="block">Emp ID, Emp Name</IonButton>
        <IonItem>
          <IonButton size="large" style={{ margin: '10px' }}>Shift details</IonButton>
          <IonButton color="success" size="large" style={{ margin: '10px' }}>Punch In</IonButton>
        </IonItem>

        <IonItem>
            {/* <IonButton  color="tertiary" className="ion-text-wrap" size="large" style={{ margin: '80px' }}>
            One Week Attendance details of Punch in, Punch Out
            </IonButton> */}
            Details of present/absent marked days in the calendar
            <IonDatetime
              presentation="date"
              // value="2024-02-01"
              highlightedDates={[
                {
                  date: '2024-02-05',
                  textColor: '#800080',
                  backgroundColor: '#FF0000',
                },
                {
                  date: '2024-02-06',
                  textColor: '#09721b',
                  backgroundColor: '#90EE90',
                },
                {
                  date: '2024-02-07',
                  textColor: '#09721b',
                  backgroundColor: '#90EE90',
                },
                {
                  date: '2024-02-08',
                  textColor: '#09721b',
                  backgroundColor: '#90EE90',
                },
              ]}
            ></IonDatetime>
        </IonItem>

          <IonButton color="secondary" size="large" style={{ margin: '20px' }}>Ticket</IonButton>
          <IonButton color="warning" size="large" style={{ margin: '10px' }}>Leave</IonButton>
          <IonButton color="danger" size="large" style={{ margin: '10px' }}>SOS</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CheckerDashboard;
