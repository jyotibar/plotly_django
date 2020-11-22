from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from random import sample

from django.shortcuts import render
from plotly.offline import plot
from plotly.graph_objs import Scatter


def home(request):

    x_data = [0,1,2,3]
    y_data = [x**2 for x in x_data]
    plot_div = plot([Scatter(x=x_data, y=y_data,
                        mode='lines', name='test',
                        showlegend=True,
                        opacity=0.8, marker_color='green')],
               output_type='div',show_link=False, link_text="")
    return render(request, "home.html",context={'plot_div': plot_div})


def get_data(request, *args, **kwargs):
    y1 = sample(range(1,50), 10)
    y2 = sample(range(1,50), 10)
    data = {
        'y_one':y1,
        'y_two':y2
    }
    return JsonResponse(data)   # http response


