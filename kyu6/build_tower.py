def tower_builder(n_floors):
    max_tower_width = 2 * n_floors - 1
    return [floor_builder(max_tower_width, current_floor) for current_floor in range(n_floors)]

def floor_builder(max_tower_width, current_floor):
    # -(-bar//foo) rounds up instead of down
    spacing = " " * (-(-max_tower_width // 2) - 1 - current_floor)
    asterisks = "*" * (1 + current_floor * 2)
    return "{0}{1}{0}".format(spacing, asterisks)
