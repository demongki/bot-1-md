const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zen: 'https://zenzapi.xyz',
        dap: 'https://api.dapuhy.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '434185F5775E',
        'https://api.dapuhy.xyz': 'friska',
}

// Other
global.owner = ['62881038062602']
global.premium = ['62881038062602']
global.packname = 'Toenixz'
global.author = 'ToenixzBotz'
global.sessionName = 'zakbotz'
global.email = 'tesheroku123@gmail.com'
global.yt = 'https://youtube.com/channel/gapunya'
global.region = 'Indonesia'
global.prefa = ['','!','.','#','-','•']
global.sp = '⭔'
global.mess = {
    success: 'Success 💯',
    admin: 'Fitur Khusus Admin Group!!!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!!!',
    owner: 'Fitur Khusus Owner Bot!!!',
    group: 'Fitur Digunakan Hanya Untuk Group!!!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!!!',
    bot: 'Fitur Khusus Pengguna Nomor Bot!!!',
    wait: '❗Waittt...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 150
}
global.thumb = fs.readFileSync('./Image/naruto.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
