# In a real application, you would implement user creation and authentication here.
# This might involve a database connection and a hashing library for passwords.

def create_user(user_data):
    # Logic to create a user in a database
    return {"id": 1, **user_data}

def authenticate_user(credentials):
    # Logic to authenticate a user and return user data or None
    if credentials.get("email") == "test@example.com" and credentials.get("password") == "password":
        return {"id": 1, "is_employer": True, "name": "John Doe"}
    return None