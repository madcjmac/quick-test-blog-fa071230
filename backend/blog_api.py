from fastapi import APIRouter, HTTPException
from typing import List
from pydantic import BaseModel
from datetime import datetime

router = APIRouter(prefix="/blog", tags=["blog"])

class Post(BaseModel):
    id: int
    title: str
    content: str
    excerpt: str
    author: str
    created_at: datetime
    image: str = None

# Mock database
posts_db = []

@router.get("/posts", response_model=List[Post])
async def get_posts():
    return posts_db

@router.post("/posts", response_model=Post)
async def create_post(post: Post):
    post.id = len(posts_db) + 1
    post.created_at = datetime.now()
    posts_db.append(post)
    return post

@router.get("/posts/{post_id}", response_model=Post)
async def get_post(post_id: int):
    post = next((p for p in posts_db if p.id == post_id), None)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    return post