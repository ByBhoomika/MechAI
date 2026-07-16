from mechai.services.router_service import process_query


def get_response(user_message):
    return process_query(user_message)