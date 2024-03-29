// TODO: implement typeguarded (runtime too) defaults setters for each props

import {
  type TAlign,
  type TDirection,
  type TSpacing
} from '../../Types'

interface TStory {
  globalStyles: any
  align: TAlign
  direction: TDirection
  spacing: TSpacing
}

interface TGroup {
  align: TAlign
  direction: TDirection
  spacing: TSpacing
}

interface TDefaults {
  Story: TStory
  Group: TGroup
}

const _storysetDefaults: TDefaults = {
  Story: {
    globalStyles: null,

    align: 'center',
    direction: 'horizontal',
    spacing: {
      between: '25px'
    }
  },
  Group: {
    align: 'center',
    direction: 'horizontal',
    spacing: {
      between: '25px'
    }
  }
}

const _mergedDefaults: TDefaults = Object.assign({}, _storysetDefaults)

export const getDefaults = (): TDefaults => {
  return _mergedDefaults
}

export const setDefaults = (
  defaults?: {
    Story?: {
      globalStyles?: any
      align?: TAlign
      direction?: TDirection
      spacing?: TSpacing
    }
    Group?: {
      align?: TAlign
      direction?: TDirection
      spacing?: TSpacing
    }
  }
): TDefaults => {
  // Story ---------------------------------------------------------------------

  if ((defaults?.Story) != null) {
    if ('globalStyles' in defaults.Story) {
      _mergedDefaults.Story.globalStyles = defaults.Story.globalStyles
    }

    if (typeof defaults.Story.align === 'string') {
      _mergedDefaults.Story.align = defaults.Story.align
    }

    if (typeof defaults.Story.direction === 'string') {
      _mergedDefaults.Story.direction = defaults.Story.direction
    }

    if (typeof defaults.Story.spacing === 'object') {
      _mergedDefaults.Story.spacing = Object.assign(
        {},
        _mergedDefaults.Story.spacing,
        defaults.Story.spacing
      )
    }
  }

  // Group ---------------------------------------------------------------------

  if ((defaults?.Group) != null) {
    if (typeof defaults.Group.align === 'string') {
      _mergedDefaults.Group.align = defaults.Group.align
    }

    if (typeof defaults.Group.direction === 'string') {
      _mergedDefaults.Group.direction = defaults.Group.direction
    }

    if (typeof defaults.Group.spacing === 'object') {
      _mergedDefaults.Group.spacing = Object.assign(
        {},
        _mergedDefaults.Group.spacing,
        defaults.Group.spacing
      )
    }
  }

  return _mergedDefaults
}
