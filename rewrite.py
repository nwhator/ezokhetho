import sys

with open(r'c:\Users\nwhat\ezokhetho\src\data.ts', 'r', encoding='utf-8', newline='') as f:
    lines = f.readlines()

def get_lines(start, end):
    return lines[start-1:end]

out_lines = []
out_lines.extend(get_lines(1, 3))
out_lines.append("\r\n")
out_lines.extend(get_lines(91, 222))
out_lines.append("\r\n")
out_lines.extend(get_lines(269, 308))
out_lines.append("\r\n")
out_lines.extend(get_lines(310, 437))
out_lines.append("\r\n")
out_lines.extend(get_lines(672, 735))
out_lines.append("\r\n")

# lines 785-808
part = get_lines(785, 808)
for i in range(len(part)):
    if "image: '/images/ezokhetho/ngithwale.jpg'" in part[i]:
        part[i] = part[i].replace("'/images/ezokhetho/ngithwale.jpg'", "'/images/products/Collections/Zodwa/The Zodwa Printed 2 piece Suit-2.webp'")
out_lines.extend(part)
out_lines.append("\r\n")

out_lines.extend(get_lines(810, 812))
out_lines.append("\r\n")
out_lines.extend(get_lines(1970, 1972))
out_lines.append("\r\n")
out_lines.extend(get_lines(1978, 1994))
out_lines.append("\r\n")
out_lines.extend(get_lines(1996, 2037))
out_lines.append("\r\n")

# lines 2039-2042
part2 = get_lines(2039, 2042)
for i in range(len(part2)):
    if "export type TCollection" in part2[i]:
        part2[i] = "export type TCollection = Awaited<ReturnType<typeof getFashionCollections>>[number]\r\n"
out_lines.extend(part2)

with open(r'c:\Users\nwhat\ezokhetho\src\data.ts', 'w', encoding='utf-8', newline='') as f:
    for line in out_lines:
        f.write(line)

print("Done")
