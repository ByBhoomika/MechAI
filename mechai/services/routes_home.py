from flask import Blueprint, render_template

home = Blueprint("home", __name__)


@home.route("/")
def home_page():
    return render_template(
        "home.html",
        active_page="home"
    )


@home.route("/chat")
def chat_page():
    return render_template(
        "chat.html",
        active_page="chat"
    )


@home.route("/settings")
def settings_page():
    return render_template(
        "settings.html",
        active_page="settings"
    )