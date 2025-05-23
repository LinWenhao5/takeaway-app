@props([
    'media' => [],
    'selected' => [],
    'name' => 'media',
    'label' => 'Media',
])

<div>
    <div class="d-flex align-items-center mb-2">
        <label for="media" class="form-label mb-0 me-2">{{ $label }}</label>
        <a href="{{ route('admin.media.library') }}" target="_blank" class="btn btn-sm btn-outline-primary">
            Upload Media
        </a>
    </div>
    <div class="row">
        @foreach ($media as $item)
            <div class="col-md-3 mb-3">
                <div class="card media-card {{ (is_array($selected) && in_array($item->id, $selected)) ? 'border-primary' : '' }}" data-id="{{ $item->id }}">
                    <img src="{{ asset('storage/' . $item->path) }}" class="card-img-top" alt="{{ $item->name }}" style="height: 150px; object-fit: cover;">
                    <div class="card-body text-center">
                        <p class="card-text">{{ $item->name }}</p>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
    <input type="hidden" name="{{ $name }}" id="selected-media-{{ $name }}" value="{{ is_array($selected) ? implode(',', $selected) : '' }}">
</div>

@push('scripts')
<script>
document.addEventListener('DOMContentLoaded', function () {
    const mediaCards = document.querySelectorAll('.media-card');
    const selectedMediaInput = document.getElementById('selected-media-{{ $name }}');
    let selectedMedia = (selectedMediaInput.value ? selectedMediaInput.value.split(',').filter(Boolean) : []);

    mediaCards.forEach(card => {
        card.addEventListener('click', function () {
            const mediaId = card.getAttribute('data-id');

            if (selectedMedia.includes(mediaId)) {
                selectedMedia = selectedMedia.filter(id => id !== mediaId);
                card.classList.remove('border-primary');
            } else {
                selectedMedia.push(mediaId);
                card.classList.add('border-primary');
            }

            selectedMediaInput.value = selectedMedia.join(',');
        });
    });
});
</script>
@endpush

<style>
.media-card {
    cursor: pointer;
    transition: border-color 0.3s ease;
}
.media-card.border-primary {
    border: 2px solid #007bff;
}
</style>