# Portfolio Backend Integration Contracts

## Overview
This document outlines the API contracts and integration points between the Douglas Morais portfolio frontend (Vite + TypeScript + React) and the FastAPI backend.

## Current Mock Data Implementation

### Frontend Mock Data (`/src/data/mock.ts`)
- **Projects**: 4 sample projects with technologies, descriptions, links
- **Experience**: 3 work experiences with timelines and responsibilities  
- **Skills**: 14 technical skills categorized (frontend, backend, database, tools)
- **Testimonials**: 3 client testimonials with ratings and company info
- **Contact Form**: Functional form with mock submission (currently alerts success)

## Required Backend APIs

### 1. Projects API
```
GET /api/projects - Get all projects
POST /api/projects - Create new project (admin)
PUT /api/projects/{id} - Update project (admin)
DELETE /api/projects/{id} - Delete project (admin)
```

**Project Model:**
```typescript
{
  id: string
  title: string
  description: string
  technologies: string[]
  imageUrl?: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  createdAt: datetime
  updatedAt: datetime
}
```

### 2. Experience API
```
GET /api/experience - Get all work experience
POST /api/experience - Create new experience (admin)
PUT /api/experience/{id} - Update experience (admin)
DELETE /api/experience/{id} - Delete experience (admin)
```

**Experience Model:**
```typescript
{
  id: string
  company: string
  position: string
  startDate: string (YYYY-MM format)
  endDate: string (YYYY-MM format or "Present")
  description: string
  technologies: string[]
  createdAt: datetime
  updatedAt: datetime
}
```

### 3. Skills API
```
GET /api/skills - Get all skills
POST /api/skills - Create new skill (admin)
PUT /api/skills/{id} - Update skill (admin)
DELETE /api/skills/{id} - Delete skill (admin)
```

**Skill Model:**
```typescript
{
  id: string
  name: string
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other'
  level: number (1-10)
  createdAt: datetime
  updatedAt: datetime
}
```

### 4. Testimonials API
```
GET /api/testimonials - Get all testimonials
POST /api/testimonials - Create new testimonial (admin)
PUT /api/testimonials/{id} - Update testimonial (admin)
DELETE /api/testimonials/{id} - Delete testimonial (admin)
```

**Testimonial Model:**
```typescript
{
  id: string
  name: string
  position: string
  company: string
  content: string
  avatar?: string
  rating: number (1-5, default 5)
  createdAt: datetime
  updatedAt: datetime
}
```

### 5. Contact API
```
POST /api/contact - Submit contact form
GET /api/contact - Get all contact submissions (admin)
```

**Contact Model:**
```typescript
{
  id: string
  name: string
  email: string
  subject: string
  message: string
  status: 'new' | 'read' | 'replied'
  createdAt: datetime
  updatedAt: datetime
}
```

## Integration Steps

### Phase 1: Backend Implementation
1. Create MongoDB models for Projects, Experience, Skills, Testimonials, Contact
2. Implement CRUD endpoints with proper error handling
3. Add data validation using Pydantic models
4. Seed database with current mock data
5. Test all endpoints

### Phase 2: Frontend Integration
1. Create API client functions in `/src/services/api.ts`
2. Replace mock data imports with API calls
3. Add loading states for API calls
4. Implement error handling and user feedback
5. Add form validation for contact form
6. Test all functionality

### Phase 3: Optional Enhancements
1. Add admin authentication for protected endpoints
2. Implement file upload for project images
3. Add email notifications for contact form submissions
4. Add pagination for projects/experience
5. Add search/filter functionality

## Environment Variables

### Frontend (.env)
```
REACT_APP_BACKEND_URL=https://be3e6b2a-8c28-48f6-8cdb-b44a398f8fe1.preview.emergentagent.com
```

### Backend (.env)
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio_db
CORS_ORIGINS=*
```

## Error Handling
- All API responses should follow consistent format
- Frontend should display user-friendly error messages
- Implement proper HTTP status codes
- Add loading spinners for better UX

## Security Considerations
- Input validation on all endpoints
- Rate limiting for contact form
- SQL injection protection (MongoDB)
- XSS protection for user-generated content

## Testing Strategy
- Unit tests for API endpoints
- Integration tests for frontend-backend communication
- Manual testing of all user flows
- Performance testing for API responses