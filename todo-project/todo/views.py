from django.shortcuts import render, redirect
from .models import Task

def index(request):
    tasks = Task.objects.all()
    return render(request, 'todo/index.html', {'tasks': tasks})

def add_task(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        if title:
            Task.objects.create(title=title)
    return redirect('index')

def delete_task(request, pk):
    task = Task.objects.get(id=pk)
    task.delete()
    return redirect('index')

def toggle_task(request, pk):
    task = Task.objects.get(id=pk)
    task.done = not task.done
    task.save()
    return redirect('index')