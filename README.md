# Zombie

The project has been implemented using react native. There are 3 components

1. **illness.js** - This file addresses the code relating to the illness screen where the user will be prompted to choose an illness that is populated from the API (http://dmmw-api.australiaeast.cloudapp.azure.com:8080/illnesses).

2. **severity.js** - This file addresses the code relating to the severity where the user will be prompted to chosse the severity. 5 images have been displayed that have been rated from level 0 to level 4.

3. **hospital.js** - This file addresses the code relating to the listing of the hospitals. The hospitals will be displayed along with the waiting time. The waiting time is calculated using the API (http://dmmw-api.australiaeast.cloudapp.azure.com:8080/hospitals) by taking into account the number of patients and the processing time.

The project has 2 services that are

1. **apiService.js** - This file is used to fetch the data from the APIs and return the result to the relevant part of the code that called it.

2. **deviceStorage.js** - This file is used to store the data on the device and fetch the data when required.

## Running the code
To run the code,
1. Install expo using
      `npm install --global expo-cli`
      
2. Make sure you have setup relavant simulators installed. For iOS, you need to install XCODE. For android, you need to install android studio (you can also use other simulators like genymotion). If you have any iOS or android device, you can just scan the QR code from expo app once the server is running. 

3. Once you have setup all these, open terminal and navigate to the root of the project folder. Next, run the command
  `npm install`.

4. Start the server using 
  `npm start`.
A new tab will open on the browser where you can select to open on simulators or through the mobiled devices connected to you laptop. You can also use expo app and scan the displayed QR code.
