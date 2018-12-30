from django.http import HttpResponseRedirect
from django.shortcuts import render
from todo.models import items


def todoView(request):
    all_items = items.objects.all() 
    return render(request, 'todo.html',
    {'todo_items': all_items})

def addTodo(request):
    # we create the new todo item
    # we save this item
    # we redirect the browser to ./todo
    item = items(content = request.POST['content'])
    item.save()
    return HttpResponseRedirect('/todo/')

def deleteTodo(request, item_id):
    item = items.objects.get(id=item_id)
    item.delete()
    return HttpResponseRedirect('/todo/')