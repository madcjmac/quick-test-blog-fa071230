import motor.motor_asyncio
from typing import List, Optional

class BlogDatabase:
    def __init__(self, connection_string: str):
        self.client = motor.motor_asyncio.AsyncIOMotorClient(connection_string)
        self.db = self.client.blog_db
        self.posts = self.db.posts
    
    async def create_post(self, post_data: dict) -> dict:
        result = await self.posts.insert_one(post_data)
        post_data["_id"] = str(result.inserted_id)
        return post_data
    
    async def get_posts(self, limit: int = 10) -> List[dict]:
        posts = await self.posts.find().sort("created_at", -1).limit(limit).to_list(limit)
        return [{"id": str(post["_id"]), **post} for post in posts]
    
    async def get_post_by_id(self, post_id: str) -> Optional[dict]:
        post = await self.posts.find_one({"_id": post_id})
        return {"id": str(post["_id"]), **post} if post else None