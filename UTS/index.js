const electron = require("electron");
const {
    app,
    BrowserWindow,
    Menu
} = electron;

let todayWindow;
let luasjgWindow;
let kelilingjajargenjangWindow;
let luaskubusWindow;
let luastabungWindow;
let luasprismasegitigaWindow;
let luaskerucutWindow;


app.on("ready", ()=> {
    todayWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        title : "Aplikasi Hitung Luas Bangun Datar"
    });

    todayWindow. loadURL(`file://${__dirname}/today.html`);
    todayWindow.on("closed", () => {

        app.quit();
        todayWindow = null;
    });
    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);

});

const LuasJajarGenjangWindowCreator = () => {
    luasjgWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Luas Jajar Genjang"
    });

    luasjgWindow.setMenu(null);
    luasjgWindow.loadURL(`file://${__dirname}/luasjg.html`);
    luasjgWindow.on("closed" , () => (luasjgWindow = null));
};

const KelilingJajarGenjangWindowCreator = () => {
    klljajargenjangWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Keliling Jajar Genjang"
    });

    klljajargenjangWindow.setMenu(null);
    klljajargenjangWindow.loadURL(`file://${__dirname}/klljajargenjang.html`);
    klljajargenjangWindow.on("closed" , () => (klljajargenjangWindow = null));
};

const LuasKubusWindowCreator = () => {
    lkubusWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Luas Kubus"
    });

    lkubusWindow.setMenu(null);
    lkubusWindow.loadURL(`file://${__dirname}/lkubus.html`);
    lkubusWindow.on("closed" , () => (lkubusWindow = null));
}; 

const LuasTabungWindowCreator = () => {
    ltabungWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Luas Tabung"
    });

    ltabungWindow.setMenu(null);
    ltabungWindow.loadURL(`file://${__dirname}/ltabung.html`);
    ltabungWindow.on("closed" , () => (ltabungWindow = null));
};

const LuasKerucutWindowCreator = () => {
    lkerucutWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Luas Tabung"
    });

    lkerucutWindow.setMenu(null);
    lkerucutWindow.loadURL(`file://${__dirname}/lkerucut.html`);
    lkerucutWindow.on("closed" , () => (lkerucutWindow = null));
};

const LuasPrismaSegitigaWindowCreator = () => {
    lprismasegitigaWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Luas Prisma Segitiga"
    });

    lprismasegitigaWindow.setMenu(null);
    lprismasegitigaWindow.loadURL(`file://${__dirname}/lprismasegitiga.html`);
    lprismasegitigaWindow.on("closed" , () => (lprismasegitigaWindow = null));
};



const menuTemplate = [
    {
        label: "Luas Jajar Genjang" ,
        click() {
            LuasJajarGenjangWindowCreator();
        }
    },

    {
        label: "Keliling Jajar Genjang" ,
        click() {
            KelilingJajarGenjangWindowCreator();
        }
    },

{

    label: "Luas Kubus" ,
    click() {
        LuasKubusWindowCreator();
    }
},

{
    label : "Luas Tabung" ,
    click() {
        LuasTabungWindowCreator();
    }

},


{
    label : "Luas Prisma Segitiga" ,
    click() {
        LuasPrismaSegitigaWindowCreator();
    }

},

{
    label : "Luas Kerucut" ,
    click() {
        LuasKerucutWindowCreator();
    }
}
]