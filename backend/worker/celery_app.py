from celery import Celery
import time

app = Celery('tasks', broker='redis://localhost:6379/0')

@app.task
def process_order(order_id):
    time.sleep(5)  # Simulate background processing
    return f"Order {order_id} processed successfully!"
