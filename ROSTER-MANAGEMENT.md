# Player Roster Management Guide

## Overview

The Nordic Pro website now includes a **private player roster system** accessible only via direct link at:
- **`/roster.html`** - Player listing page
- **`/player-profile.html?id=player-name`** - Individual profile pages

This system is **not linked in the main navigation** and remains confidential.

---

## File Structure

```
/workspace/
├── roster.html              # Player listing page
├── player-profile.html      # Individual profile template
├── players-data.json        # All player data (JSON format)
└── players/                 # Player images folder
    ├── player-name-thumb.jpg    # Thumbnail (280×350px recommended)
    └── player-name.jpg          # Full profile image (600×750px recommended)
```

---

## Adding a New Player

### Step 1: Prepare Player Images

1. **Thumbnail** (`280×350px` or similar portrait ratio)
   - Save as: `players/playername-thumb.jpg`
   
2. **Profile Photo** (`600×750px` or similar portrait ratio)
   - Save as: `players/playername.jpg`

### Step 2: Add Player Data to JSON

Open `players-data.json` and add a new player object to the `players` array:

```json
{
  "id": "firstname-lastname",
  "fullName": "Full Legal Name",
  "displayName": "Display Name",
  "position": "Position",
  "positionDetail": "Specific Position Detail",
  "nationality": "Nationality",
  "thumbnail": "players/firstname-lastname-thumb.jpg",
  "profileImage": "players/firstname-lastname.jpg",
  "dateOfBirth": "DD Month YYYY",
  "age": 24,
  "height": "XXX cm (X'X\")",
  "weight": "XX kg (XXX lbs)",
  "placeOfBirth": "City, Country",
  "raised": "City, Country",
  "heritage": "Heritage",
  "currentClub": "Current Club",
  "currentLeague": "League Name",
  "contractStatus": "Contract details",
  "draft": "Draft information (if applicable)",
  "education": "University/College info",
  "careerHistory": [
    {
      "year": "YYYY",
      "club": "Club Name",
      "league": "League Name"
    }
  ],
  "internationalCareer": {
    "level": "International level",
    "camp": "Camp details",
    "seniorEligibility": "Eligibility status"
  },
  "careerStats": [
    "Statistical highlight 1",
    "Statistical highlight 2"
  ],
  "honours": "Awards and honours",
  "scoutingAssessment": [
    "Paragraph 1 of assessment",
    "Paragraph 2 of assessment",
    "Paragraph 3 of assessment"
  ],
  "videoUrl": "https://youtu.be/VIDEO_ID"
}
```

### Step 3: Test Locally

Open `roster.html` in a browser to verify:
- Player appears in the grid
- Thumbnail displays correctly
- Clicking opens the profile page
- All information displays properly
- Video link works

---

## Current Players

1. **Olu Oyegunle** - Centre Back (Canadian)

---

## Accessing the Roster

**Direct Links (Not in navigation):**
- Roster: `https://nordic-pro.org/roster.html`
- Player Profile: `https://nordic-pro.org/player-profile.html?id=olu-oyegunle`

Share these links only with:
- Authorized scouts
- Partner clubs
- Recruitment contacts

---

## Migrating to Firebase (Future)

When ready to migrate from JSON to Firebase:

1. Create Firestore collection: `players`
2. Import JSON data as Firestore documents
3. Update JavaScript fetch calls to Firestore queries
4. Add authentication for admin access
5. Build admin interface for managing players

The current JSON structure is designed to match Firestore's data model for easy migration.

---

## Image Guidelines

**Thumbnails:**
- Dimensions: 280×350px (portrait)
- Format: JPEG
- Max file size: 150KB
- Professional headshot or action photo

**Profile Photos:**
- Dimensions: 600×750px (portrait)
- Format: JPEG
- Max file size: 300KB
- High-quality professional photo

**Video:**
- YouTube links preferred
- Format: `https://youtu.be/VIDEO_ID` or `https://youtube.com/watch?v=VIDEO_ID`
- Ensure videos are unlisted or public

---

## Security Notes

⚠️ **The roster pages are not password-protected** — security is through obscurity (no navigation links).

For enhanced security in the future:
- Add password protection
- Implement Firebase Authentication
- Set up access control lists
- Add expiring share links

---

## Support

For questions about managing the player roster, contact the development team or refer to this guide.
