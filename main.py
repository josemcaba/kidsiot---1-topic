OLED.init(128, 64)
basic.show_icon(IconNames.SMALL_DIAMOND)
ESP8266_IoT.init_wifi(SerialPin.P8, SerialPin.P12, BaudRate.BAUD_RATE115200)
ESP8266_IoT.connect_wifi("IoT", "a1b2c3d4>>")
OLED.write_string_new_line("" + str(RTC_DS1307.get_time(RTC_DS1307.TimeType.HOUR)) + ":" + str(RTC_DS1307.get_time(RTC_DS1307.TimeType.MINUTE)))
basic.pause(100)
ESP8266_IoT.connect_kidsiot("3a98OSfKko3Xge0G", "1")
basic.clear_screen()

def on_forever():
    OLED.clear()
    OLED.write_string_new_line("" + str(RTC_DS1307.get_time(RTC_DS1307.TimeType.HOUR)) + ":" + str(RTC_DS1307.get_time(RTC_DS1307.TimeType.MINUTE)))
    OLED.new_line()
    OLED.write_string_new_line("Nivel de luz: " + str(Environment.read_light_intensity(AnalogPin.P1)) + " %")
    ESP8266_IoT.upload_kidsiot(Environment.read_light_intensity(AnalogPin.P1))
    basic.pause(30000)
basic.forever(on_forever)