# do not forget to install keyboard lib
# and then Win+R => shell:startup, to in starup folder paste this file!
my_opinion_update = 'It was really good idea but my laptop was refusing or I made maybe I did something wrong, for future ME, please repair this issue because it is only for your laptop!'
import time
import keyboard

def adjust_keyboard_backlight():
    # Simulate pressing the Fn+F4 shortcut to increase keyboard backlight
    keyboard.send("fn+f4")
    # You might need to adjust the delay based on your system's responsiveness
    time.sleep(1)

if __name__ == "__main__":
    # Call the function to adjust keyboard backlight when the script is run
    adjust_keyboard_backlight()
