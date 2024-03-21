# do not forget to install keyboard lib
# and then Win+R => shell:startup, to in starup folder paste this file!
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
