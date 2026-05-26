# Using External Image URLs - Examples

If you prefer to host your image externally instead of uploading it to the project, here's how:

## Popular Image Hosting Services

### 1. Imgur (Free & Easy)

**Steps:**
1. Go to https://imgur.com
2. Click "New post"
3. Upload your image
4. Right-click the image → "Copy image address"
5. You'll get a URL like: `https://i.imgur.com/ABC123.jpg`

**Use in your code:**
```typescript
src="https://i.imgur.com/ABC123.jpg"
```

### 2. Cloudinary (Professional)

**Steps:**
1. Sign up at https://cloudinary.com (free tier available)
2. Upload your image
3. Copy the URL from the dashboard
4. You'll get a URL like: `https://res.cloudinary.com/your-account/image/upload/v123456/profile.jpg`

**Use in your code:**
```typescript
src="https://res.cloudinary.com/your-account/image/upload/v123456/profile.jpg"
```

### 3. GitHub (If using GitHub)

**Steps:**
1. Create a GitHub repository
2. Upload your image to the repo
3. Click the image in GitHub
4. Right-click → "Copy image address"
5. You'll get a URL like: `https://raw.githubusercontent.com/username/repo/main/profile.jpg`

**Use in your code:**
```typescript
src="https://raw.githubusercontent.com/username/repo/main/profile.jpg"
```

### 4. Google Drive (Public link)

**Steps:**
1. Upload to Google Drive
2. Right-click → "Get link" → "Anyone with the link"
3. Copy the link
4. Convert it to a direct link format

**Note:** Google Drive links need special formatting. Use services like Imgur instead for simplicity.

## How to Update Your Code

### Option A: Edit Hero.tsx Directly

1. Open `/components/Hero.tsx`
2. Find this section (around line 35):
```typescript
<ProfileImage
  src="/assets/profile.jpg"  // ← Change this line
  alt="K.D Yohani Malisha Wimalasena"
  initials="YW"
  className="w-full h-full transition-transform duration-300 group-hover:scale-110"
/>
```

3. Replace with your URL:
```typescript
<ProfileImage
  src="https://i.imgur.com/YOUR_IMAGE.jpg"  // ← Your URL here
  alt="K.D Yohani Malisha Wimalasena"
  initials="YW"
  className="w-full h-full transition-transform duration-300 group-hover:scale-110"
/>
```

### Option B: Use Environment Variable (Advanced)

For better organization, you can use an environment variable:

1. Create a `.env` file in your project root
2. Add: `VITE_PROFILE_IMAGE_URL=https://your-image-url.com/image.jpg`
3. Update Hero.tsx:
```typescript
src={import.meta.env.VITE_PROFILE_IMAGE_URL || "/assets/profile.jpg"}
```

## Testing Your Image URL

Before using the URL in your code, test it:

1. **Paste the URL in a new browser tab**
   - You should see ONLY your image
   - No webpage, no thumbnails, just the image

2. **Check the URL format**
   - ✅ Good: `https://example.com/image.jpg`
   - ✅ Good: `https://example.com/images/photo.png`
   - ❌ Bad: `https://example.com/gallery?id=123`
   - ❌ Bad: `https://example.com/image.html`

3. **Verify it's publicly accessible**
   - Open the URL in an incognito/private browser window
   - If you can see the image, it's public and will work

## Complete Example

Here's a complete example using Imgur:

```typescript
// In /components/Hero.tsx

<ProfileImage
  src="https://i.imgur.com/dQKRkj8.jpg"  // Imgur URL
  alt="K.D Yohani Malisha Wimalasena"
  initials="YW"
  className="w-full h-full transition-transform duration-300 group-hover:scale-110"
/>
```

## Image Optimization Tips

When using external URLs:

1. **Resize before uploading**
   - 400x400 to 800x800 pixels is ideal
   - Larger files = slower loading

2. **Compress the image**
   - Use TinyPNG.com or similar
   - Aim for 200-500KB file size

3. **Use HTTPS**
   - Always use `https://` not `http://`
   - Some browsers block mixed content

4. **Choose reliable hosting**
   - Free services: Imgur, Cloudinary (free tier)
   - Paid services: AWS S3, Cloudinary Pro, DigitalOcean Spaces

## Troubleshooting

**"The URL doesn't work"**
- Make sure it's a direct link to the image file
- Check if the URL works in a private/incognito browser
- Verify the image host allows hotlinking

**"Image loads slowly"**
- The image might be too large
- Compress it before uploading
- Try a different image host with CDN

**"Image works but doesn't show on mobile"**
- Check if the URL is HTTPS (not HTTP)
- Verify the hosting service allows mobile access

**"Getting CORS errors"**
- Some hosts block cross-origin requests
- Use imgur.com or cloudinary.com which allow it
- Or upload the image directly to your project

## Recommended Workflow

For best results:

1. **Start with initials** (already working)
2. **Take/prepare your photo**
3. **Upload to Imgur** (simplest option)
4. **Test the URL** in your browser
5. **Update Hero.tsx** with the URL
6. **Refresh and verify** it works

Need help? The initials fallback ensures your portfolio always looks professional!
