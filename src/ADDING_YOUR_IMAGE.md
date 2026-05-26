# 📸 Adding Your Profile Image - Step by Step

## What You'll See Now

Your portfolio currently displays your initials **"YW"** in a beautiful blue-to-purple gradient circle. This is the fallback design that looks professional while you're setting up your image.

## Easy Ways to Add Your Photo

### Method 1: Upload to the Project (Simplest)

1. **Prepare your photo:**
   - Take or choose a professional headshot
   - Crop it to a square (1:1 ratio)
   - Recommended size: 400x400 pixels or larger
   - Save as `profile.jpg`

2. **Add to your project:**
   - Create a folder named `assets` in your project root
   - Upload your `profile.jpg` into the `assets` folder
   - Refresh your browser - your photo should appear!

### Method 2: Use an Image URL

If you have your image hosted online:

1. **Get your image URL:**
   - Upload to Imgur, Cloudinary, or any image host
   - Copy the direct image link
   - Make sure the URL ends with `.jpg`, `.png`, or `.webp`

2. **Update the code:**
   - Open `/components/Hero.tsx`
   - Find line 35 (or search for `src="/assets/profile.jpg"`)
   - Replace with your URL:
   ```typescript
   src="https://your-image-url.com/your-photo.jpg"
   ```

### Method 3: Keep the Initials (No Image)

Your initials look professional! If you prefer to keep them:
- No action needed - it's already set up beautifully
- You can customize the initials in `/components/Hero.tsx` (line 37)

## Image Guidelines

### ✅ Do's
- Use professional attire
- Good lighting (natural light works best)
- Plain or softly blurred background
- Smile naturally
- Center your face in the frame
- Use high resolution (at least 400x400px)

### ❌ Don'ts
- Avoid group photos
- Don't use low-quality/pixelated images
- Avoid busy backgrounds
- Don't use selfies with visible phone/arm
- Avoid filters or heavy editing

## Checking Your Image

After adding your image:

1. **Refresh the page** - You should see your photo in the hero section
2. **Check the hover effect** - Your image should scale slightly when you hover
3. **Test on mobile** - Make sure it looks good on smaller screens
4. **Check loading speed** - If it's slow, compress the image

## Troubleshooting

### My image isn't showing

**Check the file path:**
- Make sure the folder is named `assets` (lowercase)
- Make sure the file is named `profile.jpg` (lowercase)
- Check that the file is in the root directory: `/assets/profile.jpg`

**Check the file format:**
- Supported: `.jpg`, `.jpeg`, `.png`, `.webp`
- Not supported: `.gif`, `.svg`, `.bmp`

**Try using a direct URL:**
- Upload to Imgur.com
- Use the direct link
- Update the code with the new URL

### My image looks blurry

- Use a higher resolution image (minimum 400x400px)
- Export at high quality (90-100%)
- Avoid stretching small images

### My image is too large (slow loading)

**Compress your image:**
- Use TinyPNG.com or ImageOptim
- Target size: 200-500KB
- This won't reduce visual quality

## File Structure

```
your-portfolio/
├── assets/
│   └── profile.jpg  ← Your image goes here
├── components/
│   ├── Hero.tsx     ← Image configuration
│   └── ProfileImage.tsx  ← Image display logic
├── App.tsx
└── ...
```

## Technical Details

The ProfileImage component:
- Automatically handles loading states
- Shows initials if image fails to load
- Provides smooth transitions
- Optimizes display for circular shape
- Works responsively on all screen sizes

## Need Help?

Common scenarios:

**"I don't have a professional photo"**
- The initials look great! Keep them for now
- Take a photo with your phone using good natural light
- Use a plain wall as background

**"My image URL doesn't work"**
- Make sure it's a direct link to the image file
- Test the URL by pasting it in a new browser tab
- It should show ONLY the image, not a webpage

**"I want to change the initials"**
- Edit `/components/Hero.tsx`
- Change `initials="YW"` to your preferred letters
- Example: `initials="KY"` for Yohani

---

## Current Setup

- **Image path:** `/assets/profile.jpg`
- **Fallback initials:** `YW`
- **Display size:** 160px (mobile) / 192px (desktop)
- **Shape:** Circular with gradient border
- **Effects:** Hover scale, animated glow

Your portfolio is ready to use with or without an image!
