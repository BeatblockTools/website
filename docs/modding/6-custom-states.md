---
sidebar_position: 6
---

# What is a state?
States are menus. The main menu, song select menu, gameplay itself, etc., are each a state.

# Adding your own state
Create a `states` folder inside your mod folder and then create a `.lua` file in it. Paste the following code inside the `.lua` file:
```jsx title="Mods/my-very-own-mod/states/MyCustomState.lua"
local st = Gamestate:new(name)   -- replace 'name' with the name of the state, usually the file's name.

st:setInit(function(self)   -- initialization function, called when the state is loaded

end)

st:setUpdate(function(self,dt)   -- update function, called every frame
  
end)

st:setBgDraw(function(self)   -- background draw function, called every frame

end)

st:setFgDraw(function(self)   -- foreground draw function, called every frame

end)

return st
```

When you launch the game, your custom state will be added to the game. To activate it, you do:
```lua
cs = bs.load('Name of the state')
cs:init()
```