ESP8266_IoT.iotSwitchEvent(ESP8266_IoT.KidsIotSwitchState.off, function () {
    basic.showIcon(IconNames.Sad)
})
ESP8266_IoT.iotSwitchEvent(ESP8266_IoT.KidsIotSwitchState.on, function () {
    basic.showIcon(IconNames.Happy)
})
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("IoT", "a1b2c3d4>>")
basic.showNumber(0)
basic.forever(function () {
    ESP8266_IoT.connectKidsiot("3a98OSfKko3Xge0G", "1")
    ESP8266_IoT.uploadKidsiot(Environment.ReadLightIntensity(AnalogPin.P1))
    basic.showNumber(1)
    ESP8266_IoT.connectKidsiot("3a98OSfKko3Xge0G", "2")
    ESP8266_IoT.uploadKidsiot(Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C))
    basic.showNumber(2)
    basic.pause(60000)
})
