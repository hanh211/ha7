from kivy.app import App
from kivy.uix.label import Label
class MyApp(App):
    def build(self):
        self.icon="icon.png"
        self.title="Hello word"
        return Label(text="Hello word")
if __name__ == '__main__':
    app=MyApp()
    app.run()
