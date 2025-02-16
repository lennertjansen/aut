from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

from app.api import deps
from app.schemas.event import EventCreate, EventUpdate, Event
from app.crud import crud_event

router = APIRouter()

@router.get("/", response_model=List[Event])
async def list_events(
    db: AsyncSession = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    organizer_id: Optional[int] = None,
):
    """
    Retrieve events.
    If organizer_id is provided, only return events for that organizer.
    """
    events = await crud_event.get_multi(
        db, skip=skip, limit=limit, organizer_id=organizer_id
    )
    return events

@router.post("/", response_model=Event)
async def create_event(
    *,
    db: AsyncSession = Depends(deps.get_db),
    event_in: EventCreate,
    current_user = Depends(deps.get_current_user),
):
    """
    Create new event.
    """
    # Verify user is an organizer
    if not current_user.is_organizer:
        raise HTTPException(
            status_code=403,
            detail="Only organizers can create events",
        )
    
    event = await crud_event.create(db, obj_in=event_in)
    return event

@router.get("/{event_id}", response_model=Event)
async def get_event(
    *,
    db: AsyncSession = Depends(deps.get_db),
    event_id: int,
):
    """
    Get event by ID.
    """
    event = await crud_event.get(db, id=event_id)
    if not event:
        raise HTTPException(
            status_code=404,
            detail="Event not found",
        )
    return event

@router.put("/{event_id}", response_model=Event)
async def update_event(
    *,
    db: AsyncSession = Depends(deps.get_db),
    event_id: int,
    event_in: EventUpdate,
    current_user = Depends(deps.get_current_user),
):
    """
    Update event.
    """
    event = await crud_event.get(db, id=event_id)
    if not event:
        raise HTTPException(
            status_code=404,
            detail="Event not found",
        )
    
    # Verify user is the organizer of this event
    if event.organizer_id != current_user.id:
        raise HTTPException(
            status_code=403,
            detail="Only the event organizer can modify this event",
        )
    
    event = await crud_event.update(db, db_obj=event, obj_in=event_in)
    return event

@router.delete("/{event_id}")
async def delete_event(
    *,
    db: AsyncSession = Depends(deps.get_db),
    event_id: int,
    current_user = Depends(deps.get_current_user),
):
    """
    Delete event.
    """
    event = await crud_event.get(db, id=event_id)
    if not event:
        raise HTTPException(
            status_code=404,
            detail="Event not found",
        )
    
    # Verify user is the organizer of this event
    if event.organizer_id != current_user.id:
        raise HTTPException(
            status_code=403,
            detail="Only the event organizer can delete this event",
        )
    
    await crud_event.remove(db, id=event_id)
    return {"status": "success"} 