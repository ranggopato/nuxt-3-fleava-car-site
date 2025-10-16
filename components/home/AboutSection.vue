<template>
    <section class="explore-section fade-section">
        <div class="content-wrapper">
            <!-- Gambar -->
            <div class="image-container">
                <img src="https://images.unsplash.com/photo-1580446632971-9c9755741304?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1990"
                    alt="Red Car Image" class="image" />
            </div>

            <!-- Konten -->
            <div class="text-content reveal-left">
                <h2 class="title">
                    Find Your Dream Car at <span>Car Media</span>
                </h2>
                <p class="description">
                    Car Media is your trusted platform for buying and selling new and used cars — fast, easy, and
                    secure. Discover thousands of vehicles from top brands, including fuel-efficient city cars, family
                    SUVs, and high-performance sports cars that will ignite your passion for driving.

                    Enjoy a seamless experience with advanced search filters, loan calculators, and transparent vehicle
                    history reports. Want to sell your car? Car Media makes it simple to reach thousands of verified
                    buyers across Indonesia.

                    With Car Media, car trading is smarter, safer, and more exciting.
                    Find, compare, and drive your dream car today!
                </p>
                <button class="cta-btn">
                    Start Buying or Selling Now!
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
// Skip
</script>

<style lang="scss" scoped>
.explore-section {
    background-color: #000;
    color: #fff;
    margin: 1rem 1rem;
    min-height: 100vh;
    display: flex;
    align-items: center;

    @media (min-width: 768px) {
        margin: 0 2rem;
    }

    @media (min-width: 1280px) {
        margin: 0 5rem;
    }

    .content-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        width: 100%;

        @media (min-width: 768px) {
            flex-direction: row;
        }

        .image-container {
            border-radius: 0.75rem;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
            width: 100%;

            @media (min-width: 768px) {
                width: 50%;
            }

            .image {
                width: 100%;
                height: auto;
                transition: transform 0.5s ease;

                &:hover {
                    transform: scale(1.05);
                }
            }
        }

        .text-content {
            width: 100%;
            text-align: center;

            @media (min-width: 768px) {
                width: 50%;
                text-align: left;
            }

            .title {
                font-size: 1.75rem;
                font-weight: 800;
                text-transform: uppercase;
                line-height: 1.2;
                border-bottom: 3px solid #ef4444;
                display: inline-block;
                padding-bottom: 0.3rem;

                @media (min-width: 768px) {
                    font-size: 2.5rem;
                }

                span {
                    color: #ef4444;
                }
            }

            .description {
                margin-top: 1rem;
                color: #d5d5d5;
                font-size: 0.9rem;
                line-height: 1.6;

                @media (min-width: 768px) {
                    font-size: 1.1rem;
                }
            }

            .cta-btn {
                margin-top: 1.5rem;
                padding: 0.75rem 1.5rem;
                background-color: #dc2626;
                color: #fff;
                font-weight: 600;
                font-size: 1.125rem;
                border-radius: 9999px;
                cursor: pointer;
                border: none;
                transition: background-color 0.3s ease, transform 0.3s ease;

                &:hover {
                    background-color: #b91c1c;
                    transform: scale(1.05);
                }
            }
        }
    }
}
</style>
