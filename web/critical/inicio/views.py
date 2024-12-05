from django.shortcuts import render


def index(request):
    user_agent = request.META.get("HTTP_USER_AGENT", "").lower()
    is_mobile = "mobile" in user_agent or "tablet" in user_agent
    return render(request, "inicio/index.html", {"is_mobile": is_mobile})
