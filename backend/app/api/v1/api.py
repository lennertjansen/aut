from fastapi import APIRouter

from app.api.v1.endpoints import events, users, organizers

api_router = APIRouter()

api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(events.router, prefix="/events", tags=["events"])
api_router.include_router(organizers.router, prefix="/organizers", tags=["organizers"]) 