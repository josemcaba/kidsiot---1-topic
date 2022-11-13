ESP8266_IoT.iotSwitchEvent(ESP8266_IoT.KidsIotSwitchState.off, function () {
    basic.showIcon(IconNames.Sad)
})
ESP8266_IoT.iotSwitchEvent(ESP8266_IoT.KidsIotSwitchState.on, function () {
    basic.showIcon(IconNames.Happy)
})
basic.showIcon(IconNames.SmallDiamond)
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("IoT", "a1b2c3d4>>")
basic.showIcon(IconNames.Diamond)
ESP8266_IoT.connectKidsiot("3a98OSfKko3Xge0G", "1")
basic.clearScreen()
OLED.init(128, 64)
basic.forever(function () {
    OLED.clear()
    ESP8266_IoT.uploadKidsiot(Environment.ReadLightIntensity(AnalogPin.P1))
    OLED.writeStringNewLine("Nivel de luz: " + ("" + Environment.ReadLightIntensity(AnalogPin.P1)) + " %")
    basic.pause(60000)
})
