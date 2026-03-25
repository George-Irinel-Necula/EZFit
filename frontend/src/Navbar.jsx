import { Button, Separator, Surface } from "@heroui/react";
import { ThemeSwitch } from "./components/theme-switch";
import { Dropdown, Avatar, Label } from "@heroui/react";
import { IconSettings, IconUser, IconDoorEnter,IconChevronDown } from "@tabler/icons-react";

export default function Navbar() {
  return (
    <>
      <Surface
        variant="ternary"
        className="w-full h-16 fixed flex items-center justify-center"
      >
        <div className="flex items-center justify-between px-6 md:px-0 md:mx-0 w-full md:w-1/2 mx-auto">
          <div className="flex items-center gap-4">
            <h1 className="font-bold text-xl">{"<GIN/>"}</h1>
            <Separator variant="secondary"
              orientation="vertical"
              className="w-0.5 m-0.5 h-fill"
            ></Separator>
            <h1 className="font-bold text-xl">EZFit App</h1>
          </div>

          <div className="flex items-center">
            <ThemeSwitch/>
            <Dropdown>
              <Dropdown.Trigger className="rounded-full">
                <div className="flex items-center gap-2">
                <Button className="hidden"><IconUser></IconUser>Log In</Button>
                <Avatar size="sm">
                  <Avatar.Image
                    alt="Junior Garcia"
                    src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
                  />
                  <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                </Avatar>
                <div className="hidden lg:inline"><h1>George Irinel Necula</h1></div>
                <IconChevronDown></IconChevronDown></div>
              </Dropdown.Trigger>
              <Dropdown.Popover>
                <div className="px-3 pt-3 pb-1">
                  <div className="flex items-center gap-2">
                    <Avatar size="sm">
                      <Avatar.Image
                        alt="Jane"
                        src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
                      />
                      <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                    </Avatar>
                    <div className="flex flex-col gap-0">
                      <p className="text-sm leading-5 font-medium">George Irinel Necula</p>
                      <p className="text-xs leading-none text-muted">
                        irinelnecula@yahoo.com
                      </p>
                    </div>
                  </div>
                </div>
                <Dropdown.Menu>
                  <Dropdown.Item
                    id="logout"
                    textValue="Logout"
                    variant="danger"
                  >
                    <div className="flex w-full items-center justify-between gap-2">
                      <Label>Log Out</Label>
                      <IconDoorEnter color="#d53c24"></IconDoorEnter>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          </div>
        </div>
      </Surface>
    </>
  );
}
