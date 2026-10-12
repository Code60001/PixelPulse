import React from "react";

/**
 * Generates a mathematically perfect serrated / scalloped stamp badge path.
 */
export function ScallopedBadge({
  text,
  fill = "#F26C17",
  textColor = "#F5F1E6",
  width = 140,
  height = 42,
  fontSize = 11,
  className = "",
  letterSpacing = "0.1em"
}: {
  text: string;
  fill?: string;
  textColor?: string;
  width?: number;
  height?: number;
  fontSize?: number;
  className?: string;
  letterSpacing?: string;
}) {
  // Generate serrated edges around box
  const numTeethX = 14;
  const numTeethY = 5;
  const points: Array<[number, number]> = [];
  const w = width;
  const h = height;

  // Top edge (left to right)
  const stepX = w / numTeethX;
  for (let i = 0; i <= numTeethX; i++) {
    const x = i * stepX;
    const y = i % 2 === 0 ? 0 : 4;
    points.push([x, y]);
  }

  // Right edge (top to bottom)
  const stepY = h / numTeethY;
  for (let i = 1; i <= numTeethY; i++) {
    const x = i % 2 === 0 ? w : w - 4;
    const y = i * stepY;
    points.push([x, y]);
  }

  // Bottom edge (right to left)
  for (let i = numTeethX - 1; i >= 0; i--) {
    const x = i * stepX;
    const y = (numTeethX - i) % 2 === 0 ? h : h - 4;
    points.push([x, y]);
  }

  // Left edge (bottom to top)
  for (let i = numTeethY - 1; i > 0; i--) {
    const x = (numTeethY - i) % 2 === 0 ? 0 : 4;
    const y = i * stepY;
    points.push([x, y]);
  }

  const d = points.reduce((acc, [px, py], idx) => {
    return idx === 0 ? `M ${px} ${py}` : `${acc} L ${px} ${py}`;
  }, "") + " Z";

  return (
    <div className={`inline-block relative select-none ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm"
      >
        <path d={d} fill={fill} />
        <text
          x={width / 2}
          y={height / 2 + fontSize / 3.2}
          fontFamily="var(--font-dm-sans), sans-serif"
          fontSize={fontSize}
          fontWeight="800"
          fill={textColor}
          textAnchor="middle"
          letterSpacing={letterSpacing}
          className="uppercase"
        >
          {text}
        </text>
      </svg>
    </div>
  );
}

/**
 * Mathematically perfect 4-point star/spark SVG
 */
export function FourPointStar({
  size = 24,
  color = "#869DFF",
  className = ""
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"
        fill={color}
      />
    </svg>
  );
}

/**
 * Mathematically perfect 8-point geometric star/asterisk SVG
 */
export function EightPointStar({
  size = 36,
  color = "#F26C17",
  className = ""
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  const points: string[] = [];
  const cx = 20;
  const cy = 20;
  const rOuter = 18;
  const rInner = 7;

  for (let i = 0; i < 16; i++) {
    const angle = (i * Math.PI) / 8 - Math.PI / 2;
    const r = i % 2 === 0 ? rOuter : rInner;
    const x = (cx + r * Math.cos(angle)).toFixed(2);
    const y = (cy + r * Math.sin(angle)).toFixed(2);
    points.push(`${x},${y}`);
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <polygon points={points.join(" ")} fill={color} />
    </svg>
  );
}

/**
 * Mathematically perfect 8-petal flower badge SVG
 */
export function EightPetalFlower({
  size = 88,
  fill = "#E8A5B3",
  stroke = "#3B001B",
  strokeWidth = 4,
  children,
  className = ""
}: {
  size?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  children?: React.ReactNode;
  className?: string;
}) {
  const cx = 50;
  const cy = 50;
  const rOuter = 44;
  const rInner = 26;
  const numPetals = 8;
  const pathParts: string[] = [];

  for (let i = 0; i < numPetals; i++) {
    const angleOuter = (i * 2 * Math.PI) / numPetals - Math.PI / 2;
    const angleInner = ((i + 0.5) * 2 * Math.PI) / numPetals - Math.PI / 2;
    const angleNextOuter = ((i + 1) * 2 * Math.PI) / numPetals - Math.PI / 2;

    const xOuter = cx + rOuter * Math.cos(angleOuter);
    const yOuter = cy + rOuter * Math.sin(angleOuter);

    const xInner = cx + rInner * Math.cos(angleInner);
    const yInner = cy + rInner * Math.sin(angleInner);

    const xNextOuter = cx + rOuter * Math.cos(angleNextOuter);
    const yNextOuter = cy + rOuter * Math.sin(angleNextOuter);

    const cp1x = xOuter + 12 * Math.cos(angleOuter + Math.PI / 2);
    const cp1y = yOuter + 12 * Math.sin(angleOuter + Math.PI / 2);

    const cp2x = xInner + 8 * Math.cos(angleInner - Math.PI / 2);
    const cp2y = yInner + 8 * Math.sin(angleInner - Math.PI / 2);

    const cp3x = xInner + 8 * Math.cos(angleInner + Math.PI / 2);
    const cp3y = yInner + 8 * Math.sin(angleInner + Math.PI / 2);

    const cp4x = xNextOuter + 12 * Math.cos(angleNextOuter - Math.PI / 2);
    const cp4y = yNextOuter + 12 * Math.sin(angleNextOuter - Math.PI / 2);

    if (i === 0) {
      pathParts.push(`M ${xOuter.toFixed(2)} ${yOuter.toFixed(2)}`);
    }
    pathParts.push(
      `C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${xInner.toFixed(2)} ${yInner.toFixed(2)}`
    );
    pathParts.push(
      `C ${cp3x.toFixed(2)} ${cp3y.toFixed(2)}, ${cp4x.toFixed(2)} ${cp4y.toFixed(2)}, ${xNextOuter.toFixed(2)} ${yNextOuter.toFixed(2)}`
    );
  }
  const d = pathParts.join(" ") + " Z";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d={d} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
      {children}
    </svg>
  );
}


/**
 * Mathematically perfect 12-point starburst smiley badge
 */
export function StarburstSmileyBadge({
  size = 60,
  outerColor = "#D9B8FF",
  innerColor = "#B8E986",
  faceColor = "#3B001B",
  className = ""
}: {
  size?: number;
  outerColor?: string;
  innerColor?: string;
  faceColor?: string;
  className?: string;
}) {
  const points: string[] = [];
  const cx = 30;
  const cy = 30;
  const rOuter = 21;
  const rInner = 16;

  for (let i = 0; i < 24; i++) {
    const angle = (i * Math.PI) / 12 - Math.PI / 2;
    const r = i % 2 === 0 ? rOuter : rInner;
    const x = (cx + r * Math.cos(angle)).toFixed(2);
    const y = (cy + r * Math.sin(angle)).toFixed(2);
    points.push(`${x},${y}`);
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Circle */}
      <circle cx="30" cy="30" r="28" fill={outerColor} />
      {/* Starburst */}
      <polygon points={points.join(" ")} fill={innerColor} />
      {/* Smiley Eyes */}
      <circle cx="23" cy="27" r="2.2" fill={faceColor} />
      <circle cx="37" cy="27" r="2.2" fill={faceColor} />
      {/* Smiley Mouth */}
      <path
        d="M22 34 Q 30 41 38 34"
        stroke={faceColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/**
 * Spinning Circular Badge with curved text
 */
export function SpinningCircularBadge({
  size = 130,
  className = ""
}: {
  size?: number;
  className?: string;
}) {
  const points: string[] = [];
  const cx = 100;
  const cy = 100;
  const numTeeth = 28;
  const rOuter = 95;
  const rInner = 88;

  for (let i = 0; i < numTeeth * 2; i++) {
    const angle = (i * Math.PI) / numTeeth - Math.PI / 2;
    const r = i % 2 === 0 ? rOuter : rInner;
    const x = (cx + r * Math.cos(angle)).toFixed(2);
    const y = (cy + r * Math.sin(angle)).toFixed(2);
    points.push(`${x},${y}`);
  }

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full animate-[spin_20s_linear_infinite]"
      >
        <path
          id="circlePathHero"
          d="M 100, 100 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
          fill="none"
        />
        {/* Serrated outer circle */}
        <polygon points={points.join(" ")} fill="#E8A5B3" />
        {/* Middle Circles */}
        <circle cx="100" cy="100" r="82" fill="#D18193" />
        <circle cx="100" cy="100" r="46" fill="#E8A5B3" />
        {/* Curved Text */}
        <text className="font-sans font-bold text-[13px] fill-white uppercase" letterSpacing="1">
          <textPath href="#circlePathHero" startOffset="0%">
            WE BUILD BRANDS • WEBSITES & GROWTH CAMPAIGNS •
          </textPath>
        </text>
        <circle cx="100" cy="100" r="32" fill="white" />
        {/* Perfectly Symmetrical 8-Petal Flower in center */}
        <g fill="#D18193">
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const px = 100 + 14 * Math.cos(angle);
            const py = 100 + 14 * Math.sin(angle);
            return <circle key={i} cx={px} cy={py} r="8" />;
          })}
          <circle cx="100" cy="100" r="6" fill="#E8A5B3" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Perfectly Symmetrical Laurel Wreath SVG
 */
export function LaurelWreath({
  title,
  subtitle,
  stars = 5,
  isCircular = false
}: {
  title: string;
  subtitle: string;
  stars?: number;
  isCircular?: boolean;
}) {
  return (
    <div className="flex flex-col items-center justify-center relative w-[170px] h-[110px] mx-2">
      {isCircular ? (
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="44" stroke="#3B001B" strokeWidth="1.5" strokeDasharray="3 3" />
          {[...Array(12)].map((_, i) => (
            <path
              key={i}
              d="M 50 10 C 53 14, 53 20, 50 24 C 47 20, 47 14, 50 10 Z"
              fill="#3B001B"
              transform={`rotate(${i * 30} 50 50)`}
            />
          ))}
        </svg>
      ) : (
        <>
          {/* Left Branch */}
          <svg className="absolute left-0 top-0 w-12 h-full" viewBox="0 0 45 100" fill="none">
            <path d="M38 95 C 15 80, 8 40, 22 5" stroke="#3B001B" strokeWidth="2" fill="none" />
            <path d="M36 86 C 24 82, 20 72, 30 72 C 35 72, 38 80, 36 86 Z" fill="#3B001B" />
            <path d="M28 68 C 14 62, 14 50, 24 50 C 30 50, 33 60, 28 68 Z" fill="#3B001B" />
            <path d="M23 48 C 8 42, 10 28, 20 28 C 26 28, 27 38, 23 48 Z" fill="#3B001B" />
            <path d="M20 28 C 6 22, 10 10, 18 10 C 24 10, 24 20, 20 28 Z" fill="#3B001B" />
            <path d="M22 5 C 14 -2, 24 0, 27 6 C 26 12, 23 10, 22 5 Z" fill="#3B001B" />
          </svg>
          {/* Right Branch */}
          <svg className="absolute right-0 top-0 w-12 h-full transform scale-x-[-1]" viewBox="0 0 45 100" fill="none">
            <path d="M38 95 C 15 80, 8 40, 22 5" stroke="#3B001B" strokeWidth="2" fill="none" />
            <path d="M36 86 C 24 82, 20 72, 30 72 C 35 72, 38 80, 36 86 Z" fill="#3B001B" />
            <path d="M28 68 C 14 62, 14 50, 24 50 C 30 50, 33 60, 28 68 Z" fill="#3B001B" />
            <path d="M23 48 C 8 42, 10 28, 20 28 C 26 28, 27 38, 23 48 Z" fill="#3B001B" />
            <path d="M20 28 C 6 22, 10 10, 18 10 C 24 10, 24 20, 20 28 Z" fill="#3B001B" />
            <path d="M22 5 C 14 -2, 24 0, 27 6 C 26 12, 23 10, 22 5 Z" fill="#3B001B" />
          </svg>
        </>
      )}

      <div className="text-center z-10 px-4 pt-1">
        <div className="font-archivo text-[10px] sm:text-[11px] text-[#3B001B]  leading-tight uppercase">
          {title}
        </div>
        <div className="font-sans text-[6px] sm:text-[7px] text-[#3B001B] font-bold uppercase tracking-widest my-1">
          {subtitle}
        </div>
        <div className="flex justify-center gap-1 mt-1">
          {[...Array(stars)].map((_, i) => (
            <svg key={i} width="9" height="9" viewBox="0 0 24 24" fill="#3B001B">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Mathematically perfect wavy card for Client Reviews
 */
export function WavyReviewCard({
  color,
  quote,
  name,
  role,
  rotation,
  hasAvatar = false,
  zIndex
}: {
  color: string;
  quote: string;
  name: string;
  role: string;
  rotation: string;
  hasAvatar?: boolean;
  zIndex: string;
}) {
  return (
    <div
      className={`relative w-[220px] h-[270px] md:w-[260px] md:h-[310px] flex flex-col justify-between p-6 transform ${rotation} hover:rotate-0 hover:scale-105 hover:z-50 transition-all duration-300 ${zIndex}`}
    >
      {/* SVG Background with crisp stamp edge */}
      <div className="absolute inset-0 pointer-events-none drop-shadow-lg">
        <svg width="100%" height="100%" viewBox="0 0 200 240" preserveAspectRatio="none">
          <path
            fill={color}
            d="
              M 0,10 
              Q 5,5 10,0 Q 20,5 30,0 Q 40,5 50,0 Q 60,5 70,0 Q 80,5 90,0 Q 100,5 110,0 Q 120,5 130,0 Q 140,5 150,0 Q 160,5 170,0 Q 180,5 190,0 Q 195,5 200,10
              Q 195,20 200,30 Q 195,40 200,50 Q 195,60 200,70 Q 195,80 200,90 Q 195,100 200,110 Q 195,120 200,130 Q 195,140 200,150 Q 195,160 200,170 Q 195,180 200,190 Q 195,200 200,210 Q 195,220 200,230 Q 195,235 190,240
              Q 180,235 170,240 Q 160,235 150,240 Q 140,235 130,240 Q 120,235 110,240 Q 100,235 90,240 Q 80,235 70,240 Q 60,235 50,240 Q 40,235 30,240 Q 20,235 10,240 Q 5,235 0,230
              Q 5,220 0,210 Q 5,200 0,190 Q 5,180 0,170 Q 5,160 0,150 Q 5,140 0,130 Q 5,120 0,110 Q 5,100 0,90 Q 5,80 0,70 Q 5,60 0,50 Q 5,40 0,30 Q 5,20 0,10 Z
            "
          />
        </svg>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between pt-4 pb-2 px-3">
        <div>
          <span className="text-4xl font-serif text-[#3B001B]  block leading-none mb-1">“</span>
          <p className="font-sans text-[11px] md:text-xs font-semibold text-[#3B001B] leading-relaxed">
            {quote}
          </p>
        </div>

        <div className="mt-4">
          <h4 className="font-display  text-[11px] md:text-xs text-[#3B001B] uppercase tracking-wide">
            {name}
          </h4>
          <p className="font-sans text-[8px] md:text-[9px] uppercase text-[#3B001B] opacity-80 font-bold">
            {role}
          </p>
        </div>

        {hasAvatar && (
          <div className="absolute -bottom-4 -right-4 z-20">
            <svg className="absolute -inset-4 w-[100px] h-[100px] -z-10" viewBox="0 0 100 100">
              <path
                d="M50 10 L60 25 L80 20 L75 40 L95 50 L75 60 L80 80 L60 75 L50 90 L40 75 L20 80 L25 60 L5 50 L25 40 L20 20 L40 25 Z"
                fill="#F5F1E6"
              />
            </svg>
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-[#3B001B]"
              alt="Avatar"
            />
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Modern, clean character vector illustration SVG for Hero section
 */
export function HeroCharacterIllustration() {
  return (
    <div className="absolute bottom-4 right-0 lg:right-16 z-0 w-[420px] h-[540px] pointer-events-none hidden md:block">
      <svg
        viewBox="0 0 400 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain object-bottom drop-shadow-xl"
      >
        {/* Character Base / Body */}
        <path
          d="M100 320 C130 270, 180 250, 225 250 C270 250, 320 270, 340 320 C365 380, 385 450, 385 500 L75 500 C85 450, 85 360, 100 320 Z"
          fill="#3B001B"
        />

        {/* Waving Arm & Hand */}
        <path d="M110 320 L70 220" stroke="#3B001B" strokeWidth="14" strokeLinecap="round" />
        <g stroke="#3B001B" strokeWidth="8" strokeLinecap="round" fill="none">
          <path d="M45 200 C25 180, 25 170, 25 150" />
          <path d="M60 210 C40 190, 40 180, 40 160" />
          <path d="M75 220 C55 200, 55 190, 55 170" />
          <path d="M90 230 C70 210, 70 200, 70 180" />
        </g>

        {/* Head */}
        <path
          d="M185 150 C175 210, 205 240, 225 235 C240 225, 250 190, 250 150 C250 100, 185 100, 185 150 Z"
          fill="#F5F1E6"
          stroke="#3B001B"
          strokeWidth="10"
        />

        {/* Cap/Hat */}
        <path d="M160 120 L260 100 L270 120 L150 140 Z" fill="#F26C17" stroke="#3B001B" strokeWidth="6" />

        {/* Ear */}
        <circle cx="255" cy="175" r="14" fill="#F5F1E6" stroke="#3B001B" strokeWidth="8" />
        <circle cx="255" cy="175" r="3" fill="#3B001B" />

        {/* Face Details */}
        {/* Eyebrow */}
        <path d="M200 155 Q 212 148 222 155" stroke="#3B001B" strokeWidth="4" strokeLinecap="round" fill="none" />
        {/* Eye */}
        <circle cx="212" cy="168" r="4.5" fill="#3B001B" />
        {/* Nose */}
        <path d="M208 180 Q 200 195 214 198" stroke="#3B001B" strokeWidth="5" strokeLinecap="round" fill="none" />
        {/* Smile */}
        <path d="M210 215 Q 224 225 236 212" stroke="#3B001B" strokeWidth="5" strokeLinecap="round" fill="none" />

        {/* Coffee Cup & Arm Holding Cup */}
        <path d="M340 440 C310 465, 270 465, 235 440" stroke="#F5F1E6" strokeWidth="18" strokeLinecap="round" fill="none" />
        {/* Cup */}
        <path d="M195 390 L200 450 C200 462, 238 462, 238 450 L243 390 Z" fill="#F26C17" stroke="#3B001B" strokeWidth="6" />
        <rect x="190" y="382" width="58" height="12" rx="4" fill="#F5F1E6" stroke="#3B001B" strokeWidth="4" />
        {/* Steam */}
        <path d="M205 370 Q 200 360 205 350 M220 370 Q 215 360 220 350" stroke="#F26C17" strokeWidth="4" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}
