---
sidebar_position: 5
---

# Custom Events and Notes

::::info[Note]
This wiki is not complete. As not much is known about how events and notes work. You will have to check the game's code most of the time.\
This also means that the information here might be inaccurate.
::::

# Loading Events
Whether you are adding an event or creating a custom note, you must create an event first.\
First, create a `.lua` file inside `Mods/your-mod/events/`. Then copy an event from the game as your template.

Not much is known about the event structure, but here are some predictions:
- `info` - Stores info that will be shown in the editor and how the events acts.
- `info.event` - The ID of the event.
- `info.name` - Name shown in the editor.
- `info.description` - Event description, seems to be only used for parameter descriptions. Example:
```lua
description = [[Parameters:
  time: Beat to spawn on
  angle: Angle to spawn at
  endAngle: (Optional) Angle to end up at
  spinEase: (Optional) Ease to use while rotating
  speedMult: (Optional) Speed multiplier for approach
]]
```
- `info.storeInChart` - Whether the event should be stored in the `chart.json` file. Seems to be `false` for events and `true` for notes.
- `info.allowInNoVFX` - Whether the event should be played if the VFX accessibility option is turned off.
- `info.tooltip` - Shown when you hover over an event in the editor. The description of the event.
- `onLoad` - Seems to be called when the level loads.
- `onOffset` - Seems to be called when the event reaches your screen. (ex. A hold note spawns.)
- `onBeat` - Seems to be called when the event hits Cranky.
- `editorProperties` - Used for displaying the event's properties on the side when selected.
- `hitCount` - Seems to return the number of times you can hit a single note. ex. You can hit a hold note twice, and another time if the extra tap is enabled. Seems to be always 0 for events.
- `shouldEditorDraw` - Returns whether the event should be drawn on the screen. It is used for large notes, like hold.

# Loading Entities
Entities are almost everything in the game. Blocks, Cranky, particles and some level backgrounds like Lawrence, Terabyte are all entities.\
If you are adding a custom note, the note will not work without an entity.\
First, create a `.lua` file inside `./Mods/your-mod/entities/`. Then paste the following template inside:
```lua
MyCustomEntity = class('MyCustomEntity', Entity)

function MyCustomEntity:initialize(params)
  -- code here
  Entity.initialize(self, params)
end

function MyCustomEntity:update(dt)
end

function MyCustomEntity:draw()
end

return HitParticle
```
- `initialize` - Called when the entity is first created. Used for declaring variables.
- `update` - Called every frame while the entity is active.
- `draw` - Used for drawing the entity.