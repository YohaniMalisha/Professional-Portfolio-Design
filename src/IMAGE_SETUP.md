# How to Add Your Profile Image

## Quick Setup

1. **Prepare Your Image**
   - Use a professional headshot or portrait photo
   - Recommended size: 400x400 pixels or larger (square format)
   - Supported formats: JPG, PNG, or WebP
   - File size: Keep under 500KB for optimal performance
   - Square images work best for the circular display

2. **Add Your Image to the Project**
   
   **Option 1: Create an assets folder (Recommended)**
   ```
   /assets/
     └── profile.jpg
   ```
   - Create a folder named `assets` in the root directory (same level as App.tsx)
   - Save your image as `profile.jpg` in this folder
   - The portfolio will automatically display it
   
   **In Figma Make:**
   - You can upload your image file and reference it directly
   - The path `/assets/profile.jpg` will automatically work once you add the file

   **Option 2: Use a direct URL (External hosting)**
   - Upload your image to a service like:
     - Imgur (free image hosting)
     - Cloudinary (professional image hosting)
     - Your own web hosting
     - GitHub repository (if using GitHub Pages)
   - Copy the direct image URL
   - Edit `/components/Hero.tsx` around line 35:
     ```typescript
     src="/assets/profile.jpg"  // Change this line
     ```
     to:
     ```typescript
     src="https://your-image-url.com/image.jpg"  // Your actual URL
     ```

   **Option 3: Use Base64 encoding (For small images)**
   - Convert your image to base64 using online tools
   - Replace the src with the base64 string
   - Best for very small images only

3. **Image Tips**
   - Use good lighting for a professional look
   - Plain or blurred background works best
   - Smile naturally and maintain good posture
   - Dress professionally
   - Center your face in the frame

## Current Image Location

The profile image is configured at: `/components/Hero.tsx` (around line 35)

Current path: `/assets/profile.jpg`

The initials displayed in fallback: `YW` (Yohani Wimalasena)

## Fallback Behavior

The portfolio uses a smart ProfileImage component that:
- Shows a beautiful gradient background with your initials (`YW`) if the image isn't found
- Displays a loading animation while the image is loading
- Provides a professional look even without an image
- Automatically scales and centers your photo

This means your portfolio looks great even before you add your image!

## Customizing the Initials

If you want to change the fallback initials, edit `/components/Hero.tsx`:

```typescript
<ProfileImage
  src="/assets/profile.jpg"
  alt="K.D Yohani Malisha Wimalasena"
  initials="YW"  // Change this to your preferred initials
  className="w-full h-full transition-transform duration-300 group-hover:scale-110"
/>
```

## Testing

After adding your image:
1. Refresh the page
2. Check that the image appears in the hero section
3. Verify the image loads quickly
4. Test on mobile devices for responsiveness

## Troubleshooting

**Image not showing?**
- Verify the file path matches exactly
- Check file permissions
- Ensure the image format is supported
- Try clearing your browser cache

**Image looks pixelated?**
- Use a higher resolution image (minimum 400x400px)
- Ensure the original image quality is high

**Image loads slowly?**
- Compress the image using tools like TinyPNG or ImageOptim
- Keep file size under 500KB
