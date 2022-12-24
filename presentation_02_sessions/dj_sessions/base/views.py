from django.shortcuts import render, redirect
from django.http import HttpRequest, HttpResponse
from django.contrib.auth.decorators import login_required


@login_required(login_url="/admin")
def session_view(request: HttpRequest) -> HttpResponse:
    if request.method == "POST":
        if request.session.get("clicked") == True:
            return render(request, "base/index.html", context={"message": "you already clicked"})
        request.session["clicked"] = True
    return render(request, "base/index.html")


def clear_clicked(request: HttpRequest) -> HttpResponse:
    request.session.pop("clicked", None)
    return redirect("/")
