from django.shortcuts import render, redirect


def home_view(request):
    return render(request, 'portfolio.html', {})

def massuni_view(request):
    return render(request, 'massuni.html', {})

def acm_view(request):
    return render(request, 'acm.html', {})

