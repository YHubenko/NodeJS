import si from 'systeminformation';
import os from 'os';

// Task 4
async function getSystemInfo() {
    const osInfo = await si.osInfo();
    const graphics = await si.graphics();
    const mem = await si.mem();
    const battery = await si.battery();
    const cpuTemperature = await si.cpuTemperature();

    console.log('Operating System: ', osInfo.platform);
    console.log('Architecture: ', osInfo.arch);
    console.log('Current User name: ', os.userInfo().username);
    console.log("CPU Cores Models:");
    const cpuInfo = os.cpus();
    cpuInfo.forEach((core: any) => {
        console.log(`- ${core.model}`);
    });
    console.log('CPU Temperature: ', cpuTemperature.main);
    console.log('Graphics Controllers: ', graphics.controllers.map(controller => controller.vendor + ' ' + controller.model));
    console.log('Total Memory: ', mem.total / (1024 * 1024 * 1024), 'GB');
    console.log('Used Memory: ', (mem.total - mem.available) / (1024 * 1024 * 1024), 'GB');
    console.log('Free Memory: ', mem.available / (1024 * 1024 * 1024), 'GB');
    console.log('Battery Info: ');
    console.log('  Charging: ', battery.hasBattery ? battery.isCharging : 'N/A');
    console.log('  Percent: ', battery.percent);
    console.log('  Remaining Time: ', battery.timeRemaining ? battery.timeRemaining : 'N/A');
    console.log('------------------------------------');
}
const frequencyInSeconds = Number(process.argv[2]);
if (isNaN(frequencyInSeconds) || frequencyInSeconds <= 0) {
    console.error('Invalid frequency. Please provide a positive number.');
    process.exit(1);
}
setInterval(getSystemInfo, frequencyInSeconds * 1000);
process.on('SIGINT', () => {
    console.log('Exiting...');
    process.exit();
});