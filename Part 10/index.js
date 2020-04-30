const electron = require("electron");
const { v4 : uuidv4 } = require('uuid');
uuidv4();

const fs = require('fs')
const {
    app,  
    BrowserWindow,
    Menu, 
    ipcMain
} = electron;

let todayWindow;
let creteWindow;
let listWindow;

let allApointment = [];
fs.readFile("db.json", (err,jsonAppointments) => {
    if(!err){
        const oldAppointment = JSON.parse(jsonAppointments);
        allApointment = oldAppointment;
    }
});
app.on("ready", () => {
    todayWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        title: "Aplikasi Dokter"
    });

    todayWindow.loadURL(`file://${__dirname}/today.html`);
    todayWindow.on("closed", () => {

        const jsonAppointments = JSON.stringify(allApointment);
        fs.writeFileSync("db.json",jsonAppointments);
        app.quit();
        todayWindow = null;
    });

    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);

});

const listWindowCreator = () => {
    listWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "All Appointments"
    });

    listWindow.setMenu(null);
    listWindow.loadURL(`file://${__dirname}/list.html`);
    listWindow.on("closed", () => (listWindow = null));
};
const createWindowCreator = () => {
    createWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Create Appointments"
    });

    createWindow.setMenu(null);
    createWindow.loadURL(`file://${__dirname}/create.html`);
    createWindow.on("closed", () => (createWindow = null));
};

ipcMain.on("appointment:create", (event, appointment) =>{
    appointment["id"] = uuidv4();
    appointment["done"] = 0;
    allApointment.push(appointment);
    sendTodayAppointments();
    createWindow.close();

    console.log(allApointment);  
});

ipcMain.on("appointment:request:list", event => {
    listWindow.webContents.send('appointment:response:list', allApointment);
});
ipcMain.on("appointment:request:today", event => {
    sendTodayAppointments();
    console.log("here2");
});

ipcMain.on("appointment:done", (event, id) => {
    allApointment.forEach((appointment) => {
        appointment.done = 1
    })
    sendTodayAppointments()
})



const sendTodayAppointments = () => {
    const today = new Date().toISOString().slice(0,10);
    const filtered = allApointment.filter(
        appointment => appointment.date === today
    );
    todayWindow.webContents.send("appointment:response:today", filtered);
}

const menuTemplate = [{
    label: "File",
    submenu: [{
        label: "New Appointment",

        click() {
            createWindowCreator();
        }
    },
    {
        label: "All Appointment",
        click(){
            listWindowCreator();
        }
    },
    {
        label: "Quit",
        
        click() {
            app.quit();
        }
    }
    ]
},

{
    label: "View",
    submenu: [{ role:"reload"}, {role:"toggledevtools"}]
},

{
    label: "About",
    click(){
        createWindow = new BrowserWindow({
            webPreferences: {
                nodeIntegration: true
            },
            width: 600,
            height: 400,
            title: "Create Appointments"
           
        });
        createWindow.loadURL(`file://${__dirname}/tes1.html`);
   
    }


}
]

